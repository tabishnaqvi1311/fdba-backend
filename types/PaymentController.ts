import { Request, Response } from "express";

export interface PaymentController {
    verifyPayment: (req: Request, res: Response) => Promise<any>;
}
