import { Request, Response } from "express";
import { RegisterController as RegisterControllerType } from "../../types/RegisterController";
import prisma from "../utils/prisma";
import {
    RegisterPlayer,
    registerPlayerSchema,
} from "../../schemas/register-player-schema";
import { generatePlayerId } from "../utils/generate-player-id";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { parseBase64 } from "../utils/parse-base64";

const razorpay = new Razorpay({
    key_id: process.env.TEST_KEY_ID!,
    key_secret: process.env.TEST_KEY_SECRET!,
});

const s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

async function uploadToS3(rawImg: string, rawDob: string, fdbaId: string) {
    const { contentType: pdfType, buffer: pdfBuffer } = parseBase64(rawDob);
    const { contentType: imageType, buffer: imageBuffer } = parseBase64(rawImg);

    const timestamp = Date.now();
    const imageName = `image-${timestamp}-${fdbaId}.${imageType.split("/")[1]}`;
    const pdfName = `dobProof-${timestamp}-${fdbaId}.pdf`;

    await Promise.all([
        s3.send(
            new PutObjectCommand({
                Bucket: "manim-bot",
                Key: `uploads/${imageName}`,
                Body: imageBuffer,
                ContentType: imageType,
            }),
        ),
        s3.send(
            new PutObjectCommand({
                Bucket: "manim-bot",
                Key: `uploads/${pdfName}`,
                Body: pdfBuffer,
                ContentType: pdfType,
            }),
        ),
    ]);

    return {
        imageUrl: `https://manim-bot.s3.amazonaws.com/uploads/${imageName}`,
        pdfUrl: `https://manim-bot.s3.amazonaws.com/uploads/${pdfName}`,
    };
}

export const RegisterController: RegisterControllerType = {
    playerRegister: async (req: Request, res: Response) => {
        try {
            const { data, amount } = req.body;

            if (!data || !amount)
                return res.status(400).json({
                    message: "empty request body sent",
                });

            const amountInt = parseInt(amount);

            if (!amount || isNaN(amountInt)) {
                return res
                    .status(400)
                    .json({ message: "Valid amount is required" });
            }

            const validated = registerPlayerSchema.safeParse(data);
            if (!validated.success) {
                return res.status(400).json({
                    message: "invalid request",
                    errors: validated.error.errors,
                });
            }

            const parsedData: RegisterPlayer = validated.data;

            const doesEmailExist = await prisma.registeredPlayer.findUnique({
                where: { email: parsedData.email },
            });
            if (doesEmailExist)
                return res
                    .status(400)
                    .json({ message: "Email already exists" });

            const playerId = generatePlayerId();

            const { imageUrl, pdfUrl } = await uploadToS3(
                parsedData.image,
                parsedData.dobProof,
                playerId,
            );

            if (!imageUrl || !pdfUrl)
                return res
                    .status(400)
                    .json({ message: "Image or PDF upload failed" });

            const result = await prisma.$transaction(async (tx: any) => {
                const createdPlayer = await tx.registeredPlayer.create({
                    data: {
                        name: parsedData.fullName,
                        playerId,
                        gender: parsedData.gender,
                        dateOfBirth: parsedData.dob,
                        placeOfBirth: parsedData.placeOfBirth,
                        identificationMarks:
                            parsedData.twoVisibleIdentificationMarks,
                        imageLink: imageUrl,
                        dobProofLink: pdfUrl,
                        communicationAddress: parsedData.communicationAddress,
                        pinCode: parsedData.pinCode,
                        email: parsedData.email,
                        contactNumber: parsedData.contactNumber,
                        organisationType: parsedData.organisationType,
                        organisationName: parsedData.organisationName,
                        organisationEmail: parsedData.organisationEmail,
                        organisationContact:
                            parsedData.organisationContactNumber,
                        organisationAddress: parsedData.organisationAddress,
                        nameOfContact: parsedData.nameOfContactPerson,
                        fatherName: parsedData.fatherName,
                        fatherContact: parsedData.fatherNumber,
                        motherName: parsedData.motherName,
                        motherContact: parsedData.motherNumber,
                        Payment: {
                            create: {
                                amount: amountInt,
                                currency: "INR",
                                status: "PENDING",
                            },
                        },
                    },
                    include: { Payment: true },
                });

                if (!createdPlayer.Payment) {
                    throw new Error("PLAYER_PAYMENT_NOT_CREATED");
                }

                let razorpayOrder;
                try {
                    razorpayOrder = await razorpay.orders.create({
                        amount: amountInt * 100,
                        currency: "INR",
                        receipt: createdPlayer.id, // cuid
                        notes: {
                            type: "PLAYER_REGISTRATION",
                            id: playerId, // fdba id
                        },
                    });
                } catch (e) {
                    throw new Error("RAZORPAY_ORDER_CREATION_FAILED");
                }

                await tx.payment.update({
                    where: { id: createdPlayer.Payment.id },
                    data: {
                        razorpayOrderId: razorpayOrder.id,
                        status: "CREATED",
                    },
                });

                return {
                    player: createdPlayer,
                    razorpayOrder,
                };
            });

            const token = jwt.sign(
                {
                    image: result.player.imageLink,
                    name: result.player.name,
                    fatherName: result.player.fatherName,
                    dob: result.player.dateOfBirth,
                    playerId,
                    createdAt: result.player.createdAt,
                },
                process.env.JWT_SECRET as string,
                { expiresIn: "7d" },
            );

            return res.status(200).json({
                token,
                order: result.razorpayOrder,
                paymentId: result.player.Payment?.id,
            });
        } catch (e: any) {
            console.error("Registration error:", e);

            if (e.message === "RAZORPAY_ORDER_CREATION_FAILED") {
                return res
                    .status(500)
                    .json({ message: "Failed to create payment order" });
            }

            return res.status(500).json({ message: "Registration failed" });
        }
    },
    tournamentRegister: async (req: Request, res: Response) => {
        return res
            .status(200)
            .json({ message: "Tournament registered successfully" });
    },
};
