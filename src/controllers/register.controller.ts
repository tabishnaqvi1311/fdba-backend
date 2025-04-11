import { Request, Response } from "express";
import { RegisterController as RegisterControllerType } from "../../types/RegisterController";

export const RegisterController: RegisterControllerType = {
    playerRegister: async (req: Request, res: Response) => {
        return res
            .status(200)
            .json({ message: "Player registered successfully" });
    },
    tournamentRegister: async (req: Request, res: Response) => {
        return res
            .status(200)
            .json({ message: "Tournament registered successfully" });
    },
};
