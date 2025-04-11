import { Request, Response } from "express";
import { PaymentController as PaymentControllerType } from "../../types/PaymentController";
import crypto from "crypto";
import prisma from "../utils/prisma";

export const PaymentController: PaymentControllerType = {
    verifyPayment: async (req: Request, res: Response) => {
        try {
            const {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                paymentId,
            } = req.body;

            if (
                !razorpay_payment_id ||
                !razorpay_order_id ||
                !razorpay_signature ||
                !paymentId
            ) {
                return res.status(400).json({ message: "Invalid request" });
            }

            const generatedSignature = crypto
                .createHmac("sha256", process.env.TEST_KEY_SECRET!)
                .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                .digest("hex");

            if (generatedSignature !== razorpay_signature) {
                await prisma.payment.update({
                    where: { id: paymentId },
                    data: { status: "FAILED" },
                });
                return res.status(401).json({ message: "Invalid signature" });
            }

            await prisma.$transaction(async (tx: any) => {
                const existingPayment = await tx.payment.findUnique({
                    where: { id: paymentId },
                });

                if (!existingPayment) {
                    throw new Error("Payment record not found");
                }

                await tx.payment.update({
                    where: { id: paymentId },
                    data: {
                        razorpayOrderId: razorpay_order_id,
                        razorpayPaymentId: razorpay_payment_id,
                        status: "SUCCESS",
                    },
                });
            });

            return res.status(200).json({ message: "Payment verified" });
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal server error" });
        }
    },
};
