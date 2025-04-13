import { Request, Response } from "express";

export interface RegisterController {
    playerRegister: (req: Request, res: Response) => Promise<any>;
    tournamentRegister: (req: Request, res: Response) => Promise<any>;
    generateCard: (req: Request, res: Response) => Promise<any>;
}
