import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { AdminController as AdminControllerType } from "../../types/AdminController";
import jwt from "jsonwebtoken";
import { RequestWithAdmin } from "../../types/RequestWithAdmin";
import prisma from "../utils/prisma";
import generateIdCardHtml from "../utils/generate-id-card-html";
import formatDateOnly from "../utils/format-date-only";
import { uploadCard } from "../utils/s3";
import { generatePdf } from "./register.controller";

export const adminController: AdminControllerType = {
    login: async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res
                    .status(400)
                    .json({ error: "Username and password are required" });
            }
            const adminUsername = process.env.ADMIN;
            const adminPasswordHash = process.env.ADMINPASS;

            if (!adminUsername || !adminPasswordHash) {
                return res
                    .status(500)
                    .json({ error: "Server not properly configured" });
            }

            if (username !== adminUsername) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const isPasswordValid = await bcrypt.compare(
                password,
                adminPasswordHash,
            );
            if (!isPasswordValid) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const sessionToken = jwt.sign(
                { user: adminUsername },
                process.env.JWT_SECRET!,
                { expiresIn: "1h" },
            );

            res.cookie("adminToken", sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production" ? "strict" : "lax",
                maxAge: 60 * 60 * 1000, // 1 hour
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    me: async (req: RequestWithAdmin, res: Response) => {
        if (!req.cookies.adminToken) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        return res.status(200).json({ sucess: true });
    },
    generateId: async (req: RequestWithAdmin, res: Response) => {
        if (!req.cookies.adminToken) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const { id } = req.body;

        if (!id) return res.status(400).json({ error: "Invalid request" });

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
