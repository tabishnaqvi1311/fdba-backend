import express from "express";
const paymentRouter = express.Router();
import { PaymentController } from "../controllers/payment.controller";

const { verifyPayment } = PaymentController;

paymentRouter.post("/verify-payment", verifyPayment);

export default paymentRouter;
