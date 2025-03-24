import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import {authUser} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", authUser, UserController.getUser);

export default router;