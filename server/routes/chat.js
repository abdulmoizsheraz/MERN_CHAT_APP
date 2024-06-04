import express from "express";
import { newGroupChat,getMyChats,getMyGroups,addMembers,removeMember,leaveGroup } from "../controllers/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.use(isAuthenticated);

router.post('/newChat', newGroupChat);
router.get("/my", getMyChats);
router.get("/my/groups", getMyGroups); // grps that are created my me
router.put("/addmembers", addMembers);

router.put(
  "/removemember",
  removeMember
);
router.delete("/leave/:id", leaveGroup);


export default router;
