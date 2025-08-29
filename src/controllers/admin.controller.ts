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
import { parseBase64 } from "../utils/parse-base64";

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
                    process.env.NODE_ENV === "production" ? "none" : "lax",
                maxAge: 60 * 60 * 1000, // 1 hour
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    me: async (req: RequestWithAdmin, res: Response) => {
        const token = req.cookies.adminToken;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!);
            return res.status(200).json({ success: true });
        } catch (err) {
            return res.status(401).json({ error: "Invalid or Expired Token" });
        }
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

            if (!player)
                return res
                    .status(404)
                    .json({ error: "Player with that ID not found" });

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
                    .json({ message: "Player data is incomplete!" });
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

    uploadMinutes: async (req: RequestWithAdmin, res: Response) => {
        if (!req.cookies.adminToken) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const { meetingTitle, meetingDate, meetingType, doc } = req.body;

        // TODO: to validate the schema with zod

        if (!meetingTitle || !meetingDate || !doc) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const { contentType: pdfType, buffer: pdfBuffer } = parseBase64(doc);
        const timestamp = Date.now();

        const pdfName = `meetings/${meetingType}-${timestamp}.pdf`;
        let meetingMinutes: string;

        try {
            meetingMinutes = await uploadCard(pdfBuffer, pdfName);
        } catch (error) {
            console.error("Minutes upload error:", error);
            return res.status(500).json({ message: "Minutes upload failed" });
        }

        try {
            await prisma.meetingMinutes.create({
                data: {
                    meetingTitle,
                    meetingDate,
                    meetingType,
                    meetingMinutes,
                },
            });
        } catch (error) {
            console.error("Minutes creation error:", error);
            return res.status(500).json({ message: "Minutes creation failed" });
        }

        return res
            .status(200)
            .json({ message: "Minutes uploaded successfully" });
    },

    getMeetings: async (req: Request, res: Response) => {
        const { type, cursor, limit = 10, sort } = req.query;

        const whereClause: any = {};

        const orderBy: any = { createdAt: "desc" };
        if (sort === "asc") orderBy.createdAt = "asc";

        if (type) whereClause.meetingType = type;
        if (cursor) {
            if (sort === "asc") {
                // For ascending, get records newer than cursor
                whereClause.createdAt = {
                    gt: new Date(cursor as string),
                };
            } else {
                // For descending, get records older than cursor
                whereClause.createdAt = {
                    lt: new Date(cursor as string),
                };
            }
        }
        try {
            const meetings = await prisma.meetingMinutes.findMany({
                where: whereClause,
                orderBy,
                take: Number(limit),
                select: {
                    id: true,
                    meetingTitle: true,
                    meetingDate: true,
                    meetingType: true,
                    meetingMinutes: true,
                    createdAt: true,
                },
            });
            const nextCursor =
                meetings.length > 0
                    ? meetings[meetings.length - 1].createdAt.toISOString()
                    : null;
            return res.status(200).json({ meetings, nextCursor });
        } catch (e) {
            console.log(e);
            res.status(500).send({ message: "internal server error" });
        }
    },
    logout: async (req: Request, res: Response) => {
        const token = req.cookies.adminToken;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        res.clearCookie("adminToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });
        return res.status(200).json({ message: "Logged out" });
    },
};
