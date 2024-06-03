 const getOtherMember = (members, userId) =>
    members.find((member) => member._id.toString() !== userId.toString()); // returns the other member of the chat other than the current user

 export {getOtherMember}