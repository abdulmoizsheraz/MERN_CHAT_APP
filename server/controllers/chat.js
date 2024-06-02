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
    "665c949a0e87ab6e2cb293c2",
    "665c8c7b54d1cdd09a9fa80a",
    "665c47da947773ce6c173d27"
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

})

const getMyChats = TryCatch(async (req, res, next) => {
  const chats = await Chat.find({ members: req.user }).populate(
    "members",
    "name avatar"
  ); // it will give me name and avatar of members of chat only 

});



export {newGroupChat,getMyChats}
