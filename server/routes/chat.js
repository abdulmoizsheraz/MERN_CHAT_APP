import express from "express";
import { newGroupChat } from "../controllers/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.use(isAuthenticated);

router.post('/newChat', newGroupChat);


export default router;
