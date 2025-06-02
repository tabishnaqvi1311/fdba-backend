import express from "express";
const adminRouter = express.Router();

import { adminController } from "../controllers/admin.controller";

const { login, me, generateId } = adminController;

adminRouter.post("/login", login);
adminRouter.get("/me", me);
adminRouter.post("/generate-id", generateId);

export default adminRouter;
