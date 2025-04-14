import express from "express";
const registerRouter = express.Router();
import { RegisterController } from "../controllers/register.controller";
import checkUserExist from "../middleware/check-user-exist";

const { playerRegister, tournamentRegister, generateCard } = RegisterController;

registerRouter.post("/player", playerRegister);
registerRouter.get("/player/generate-card", checkUserExist, generateCard);
registerRouter.post("/tournament", tournamentRegister);

export default registerRouter;
