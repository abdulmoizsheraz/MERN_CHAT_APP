import express from "express";
import { newGroupChat,getMyChats,getMyGroups } from "../controllers/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.use(isAuthenticated);

router.post('/newChat', newGroupChat);
router.get("/mygrps", getMyChats);
app.get("/my/groups", getMyGroups);



export default router;
