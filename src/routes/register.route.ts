import express from "express";
const registerRouter = express.Router();
import { RegisterController } from "../controllers/register.controller";
import { SlowDownRequestHandler } from "express-slow-down";
import { RateLimitRequestHandler } from "express-rate-limit";
import createRateLimiter from "../middleware/rate-limiter";
import createThrottler from "../middleware/throttler";
import checkUserExist from "../middleware/check-user-exist";

const { playerRegister, tournamentRegister, generateCard } = RegisterController;

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

registerRouter.post("/player", throttler, limiter, playerRegister);
registerRouter.get(
    "/player/generate-card",
    throttler,
    limiter,
    checkUserExist,
    generateCard,
);
registerRouter.post("/tournament", throttler, limiter, tournamentRegister);

export default registerRouter;
