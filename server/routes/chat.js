import express from "express";
import { newGroupChat,getMyChats,getMyGroups,addMembers,removeMember,leaveGroup,sendAttachments,getChatDetails ,renameGroup , deleteChat} from "../controllers/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { attachmentsMulter } from "../middlewares/multer.js";

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

// Send Attachments

router.post(
  "/message",
  attachmentsMulter,
  sendAttachments
);
// Route for getting chat details
router
  .route("/:id")
  .get(getChatDetails)
  .put(renameGroup)
  .delete(deleteChat);


export default router;
