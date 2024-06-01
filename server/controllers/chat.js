import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/emitEvent.js"; 
import {
    ALERT,
    REFETCH_CHATS,
  } from "../constants/event.js";


const newGroupChat = TryCatch(async (req, res, next) => {
// const {name,members}=req.body;
const name="Bianry Brains"
const members=[
    "665807761e3c47225fd8587f",
    "665831a4b6ab067419d436af",
    "665aee75f4f0b8e308b7d48a"
  ]
const allMembers = [...members, req.user];
await Chat.create({
    name,
    groupChat: true,
    creator: req.user,
    members: allMembers,
  });
  // Notifiy all members of the group
  emitEvent(req, ALERT, allMembers, `Welcome to ${name} group`);
  // Refetching the chats for the members
  emitEvent(req, REFETCH_CHATS, members);

  return res.status(201).json({
    success: true,
    message: "Group Created",
  });
console.log(members,name);


})

export {newGroupChat}
