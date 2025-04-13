import { NextFunction, Response } from "express";
import prisma from "../utils/prisma";
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../../types/RequestWithUser";

export default async function checkUserExist(
    req: RequestWithUser,
    res: Response,
    next: NextFunction,
): Promise<any> {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "unauthorized" });
    if (!authHeader?.startsWith("Bearer "))
        return res.status(401).json({ message: "unauthorized" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        const { id } = decoded as { id: string };

        if (!id) return res.status(401).json({ message: "unauthorized" });
        console.log(id);

        const user = await prisma.registeredPlayer.findUnique({
            where: { id: id },
            include: {
                Payment: true,
            },
        });

        if (!user || !user.Payment)
            return res.status(404).json({ message: "user not found" });

        if (user.Payment.status !== "SUCCESS")
            return res.status(401).json({ message: "unauthorized" });

        req.userId = id;
        next();
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "unauthorized" });
    }
}
