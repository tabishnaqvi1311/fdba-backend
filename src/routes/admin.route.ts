import express from "express";
const adminRouter = express.Router();

import { adminController } from "../controllers/admin.controller";

const { login, me, generateId, uploadMinutes, getMeetings, logout } =
    adminController;

adminRouter.post("/login", login);
adminRouter.get("/me", me);
adminRouter.post("/generate-id", generateId);
adminRouter.post("/upload-minutes", uploadMinutes);
adminRouter.get("/meetings", getMeetings);
adminRouter.post("/logout", logout);

export default adminRouter;
