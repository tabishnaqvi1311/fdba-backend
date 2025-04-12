import express from "express";
const paymentRouter = express.Router();

import { PaymentController } from "../controllers/payment.controller";
import { SlowDownRequestHandler } from "express-slow-down";
import { RateLimitRequestHandler } from "express-rate-limit";
import createThrottler from "../middleware/throttler";
import createRateLimiter from "../middleware/rate-limiter";

const { verifyPayment } = PaymentController;

const throttler: SlowDownRequestHandler = createThrottler({
    windowMs: 15 * 60 * 1000,
    delayAfter: 10, // after the tenth request within 15 mins, start delaying, lenient
    delayMs: (hits) => hits * 100, // delay each request by 100ms
    maxDelayMs: 2000, // max delay of 2 second
});

const limiter: RateLimitRequestHandler = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100, // can make at most 100 request / 15 min, more lenient
    standardHeaders: true,
    legacyHeaders: false,
});

paymentRouter.post("/verify-payment", throttler, limiter, verifyPayment);

export default paymentRouter;
