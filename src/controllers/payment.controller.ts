import { Request, Response } from "express";
import { PaymentController as PaymentControllerType } from "../../types/PaymentController";

export const PaymentController: PaymentControllerType = {
    verifyPayment: async (req: Request, res: Response) => {
        return res
            .status(200)
            .json({ message: "Payment verified successfully" });
    },
};
