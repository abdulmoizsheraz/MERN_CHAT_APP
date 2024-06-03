import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/emitEvent.js"; 
import { getOtherMember } from "../lib/helper.js";
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
  ); 
  
  const chattToReturn = chats.map(({ _id, name, members, groupChat})=>{
    const otherMember = getOtherMember(members, req.user); // it is for only chat having 2 members or we can say a chat between me and Zain etc
        return {
          _id,
          groupChat,
          avatar: groupChat
          ? members.slice(0, 3).map(({ avatar }) => avatar.url)
          : [otherMember.avatar.url],
          name: groupChat ? name : otherMember.name,
          members: members.reduce((prev, curr) => {  // This code is creating an array of user IDs that are not the same as the current user's ID, by iterating over a list of user IDs and adding each ID to the array if it's not equal to the current user's ID.
            if (curr._id.toString() !== req.user.toString()) {
              prev.push(curr._id);
            }
            return prev;
          }, []),
        }
  })
  return res.status(200).json({
    success: true,
    chats: chattToReturn,
  });

});

const getMyGroups=TryCatch(async(req,res,next)=>{
    // THese are my grps
})



export {newGroupChat,getMyChats}
