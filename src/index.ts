import express, { Request, Response } from "express";
import cors from "cors";

import registerRouter from "./routes/register.route";
import paymentRouter from "./routes/payment.route";
import logRequest from "./middleware/request-logger";

import { throttler, limiter } from "./middleware/global-limiter";
import adminRouter from "./routes/admin.route";

import cookieParser from "cookie-parser";

const port = process.env.PORT || 8000;
const SERVER_ORIGIN = process.env.SERVER_ORIGIN;
const vercelOrigin = process.env.FRONTEND_ORIGIN!;
const mainOrigin = process.env.FRONTEND_ORIGIN_MAIN!;

const app = express();

app.use(express.json({ limit: "10mb" })); // or even '50mb' if needed
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(
    cors({
        origin: [vercelOrigin, mainOrigin],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }),
);

app.use(logRequest);

app.use(throttler);
app.use(limiter);

app.use("/payment", paymentRouter);
app.use("/register", registerRouter);
app.use("/admin", adminRouter);

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "working!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${SERVER_ORIGIN}:${port}`);
});
