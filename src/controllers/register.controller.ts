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
import {
    RegisterTournament,
    tournamentRegisterSchema,
} from "../../schemas/tournament-player-schema";
import { uploadCard, uploadImageAndPdfToS3, uploadPdfsToS3 } from "../utils/s3";
import { RequestWithUser } from "../../types/RequestWithUser";
import formatDateOnly from "../utils/format-date-only";
import generateIdCardHtml from "../utils/generate-id-card-html";
import puppeteer from "puppeteer";

const razorpay = new Razorpay({
    key_id: process.env.TEST_KEY_ID!,
    key_secret: process.env.TEST_KEY_SECRET!,
});

async function generatePdf(
    template: string,
): Promise<Uint8Array<ArrayBufferLike>> {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(template, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
        format: "A4",
        landscape: true,
        printBackground: true,
        margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
    });

    await browser.close();
    return pdfBuffer;
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
                return res.status(400).json({
                    message:
                        "Player with that email already exists, please choose another one",
                });

            const playerId = generatePlayerId();

            const { imageUrl, pdfUrl } = await uploadImageAndPdfToS3(
                parsedData.image,
                parsedData.dobProof,
                playerId,
            );

            if (!imageUrl || !pdfUrl)
                return res
                    .status(400)
                    .json({ message: "Image or PDF upload failed" });

            const result = await prisma.$transaction(async (tx) => {
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
                { id: result.player.id },
                process.env.JWT_SECRET as string,
                { expiresIn: "30d" },
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

            const validated = tournamentRegisterSchema.safeParse(data);
            if (!validated.success) {
                return res.status(400).json({
                    message: "invalid request",
                    errors: validated.error.errors,
                });
            }

            const parsedData: RegisterTournament = validated.data;

            const { docUrl1, docUrl2 } = await uploadPdfsToS3(
                parsedData.dobProof,
                parsedData.player2DobProof as string | null,
                generatePlayerId(),
                generatePlayerId(),
            );

            if (!docUrl1) {
                return res.status(400).json({ message: "image upload failed" });
            }

            const result = await prisma.$transaction(async (tx) => {
                const createdTeam = await tx.tournamentPlayer.create({
                    data: {
                        player1Name: parsedData.player1.fullname,
                        player1Gender:
                            parsedData.player1.gender.toUpperCase() as
                                | "MALE"
                                | "FEMALE",
                        player1Email: parsedData.player1.email,
                        player1Phone: parsedData.player1.phone,
                        player1DateOfBirth: parsedData.player1.dateOfBirth,
                        player1DobProofLink: docUrl1,

                        player2Name: parsedData.player2?.fullname,
                        player2Gender:
                            parsedData.player2?.gender.toUpperCase() as
                                | "MALE"
                                | "FEMALE",
                        player2Email: parsedData.player2?.email,
                        player2Phone: parsedData.player2?.phone,
                        player2DateOfBirth: parsedData.player2?.dateOfBirth,
                        player2DobProofLink: docUrl2,

                        ageCategory: parsedData.ageCategory,
                        category: parsedData.category.toUpperCase() as
                            | "SINGLES"
                            | "DOUBLES"
                            | "MIXED_DOUBLES",
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
                if (!createdTeam.Payment) {
                    throw new Error("TOURNAMENT_PAYMENT_NOT_CREATED");
                }

                let razorpayOrder;
                try {
                    razorpayOrder = await razorpay.orders.create({
                        amount: amountInt * 100,
                        currency: "INR",
                        receipt: createdTeam.id, // cuid
                        notes: {
                            type: "TOURNAMENT_REGISTRATION",
                            id: createdTeam.id, // fdba id
                        },
                    });
                } catch (e) {
                    throw new Error("RAZORPAY_ORDER_CREATION_FAILED");
                }

                await tx.payment.update({
                    where: { id: createdTeam.Payment.id },
                    data: {
                        razorpayOrderId: razorpayOrder.id,
                        status: "CREATED",
                    },
                });

                return {
                    player: createdTeam,
                    razorpayOrder,
                };
            });

            return res.status(200).json({
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
    generateCard: async (req: RequestWithUser, res: Response) => {
        const id = req.userId;

        try {
            const player = await prisma.registeredPlayer.findUnique({
                where: { id },
                select: {
                    playerId: true,
                    name: true,
                    fatherName: true,
                    dateOfBirth: true,
                    imageLink: true,
                    cardUrl: true,
                },
            });

            const {
                playerId,
                name,
                fatherName,
                dateOfBirth,
                imageLink,
                cardUrl,
            } = player!;

            if (cardUrl) return res.status(200).json({ cardUrl });

            if (
                !playerId ||
                !name ||
                !fatherName ||
                !dateOfBirth ||
                !imageLink
            ) {
                return res
                    .status(400)
                    .json({ message: "Player data is incomplete" });
            }

            const template = generateIdCardHtml(
                playerId,
                imageLink,
                name,
                fatherName,
                dateOfBirth,
                formatDateOnly(new Date()),
                formatDateOnly(
                    new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1),
                    ),
                ),
            );

            const pdfBuffer = await generatePdf(template);

            const uploadedPdf = await uploadCard(
                pdfBuffer,
                `id-cards/${playerId}.pdf`,
            );

            if (!uploadedPdf)
                throw new Error("an error occured while uploading to s3");

            await prisma.registeredPlayer.update({
                where: { id: id },
                data: { cardUrl: uploadedPdf },
            });

            return res.status(200).json({ cardUrl: uploadedPdf });
        } catch (error) {
            console.error("Card generation error:", error);
            return res.status(500).json({ message: "Card generation failed" });
        }
    },
};
