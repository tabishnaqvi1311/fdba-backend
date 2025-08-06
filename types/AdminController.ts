import { Request, Response } from "express";
import { RequestWithAdmin } from "./RequestWithAdmin";

export interface AdminController {
    login: (req: Request, res: Response) => Promise<any>;
    me: (req: RequestWithAdmin, res: Response) => Promise<any>;
    generateId: (req: RequestWithAdmin, res: Response) => Promise<any>;
    uploadMinutes: (req: RequestWithAdmin, res: Response) => Promise<any>;
    getMeetings: (req: Request, res: Response) => Promise<any>;
    logout: (req: RequestWithAdmin, res: Response) => Promise<any>;
}
