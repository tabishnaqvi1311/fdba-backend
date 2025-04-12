import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

export default function logRequest(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        const statusColor =
            res.statusCode >= 500
                ? chalk.redBright
                : res.statusCode >= 400
                  ? chalk.yellowBright
                  : res.statusCode >= 300
                    ? chalk.cyanBright
                    : chalk.greenBright;
        console.log(
            `${req.method} ${req.originalUrl} → ${statusColor(res.statusCode)} in ${duration}ms at ${new Date().toISOString()}`,
        );
    });

    next();
}
