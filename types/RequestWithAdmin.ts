import { Request } from "express";

export interface RequestWithAdmin extends Request {
    user?: string;
}
