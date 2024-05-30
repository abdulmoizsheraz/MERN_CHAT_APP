import mongoose, { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    groupChat: {
      type: boolean,
     default:false
    },
    creator: {
      type: Types.ObjectId,
      ref:"User"
    },
    members:[
        {
            type: Types.ObjectId,
            ref:"User"
        }
        ],
  },
  {
    timestamps: true,
  }
);

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await hash(this.password, 10);
});

export const User = mongoose.models.Chat || model("Chat", schema);