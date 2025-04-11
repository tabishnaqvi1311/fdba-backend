import express from "express";
const registerRouter = express.Router();
import { RegisterController } from "../controllers/register.controller";

const { playerRegister, tournamentRegister } = RegisterController;

registerRouter.post("/player", playerRegister);
registerRouter.post("/tournament", tournamentRegister);

export default registerRouter;
