import express from "express";
import { newGroupChat,getMyChats } from "../controllers/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.use(isAuthenticated);

router.post('/newChat', newGroupChat);
router.get("/mygrps", getMyChats);



export default router;
