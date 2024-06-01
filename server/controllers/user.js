import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/sendToken.js";
import { cookieOptions } from "../utils/sendToken.js";
import { TryCatch } from "../middlewares/error.js";
import  {ErrorHandler} from "../utils/ErrorHandler.js";
const newUser = TryCatch(async (req, res) => {
  const { name, bio, username, password } = req.body;
    const avatar = {
      public_id: "123456789",
      url: "https://res.cloudinary.com/dx9n8ts0c/image/upload/v1630124542/123456789.jpg",
    };

    const user = new User({
      name,
      bio,
      username,
      password,
      avatar,
    });

    const savedUser = await user.save();
    sendToken(res, savedUser, 201, "User created successfully");
});

const login =  TryCatch(async(req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHandler("Invalid Username or Password", 404));

  sendToken(res, user, 200, `Welcome Back, ${user.name}`);
});


const getMyProfile = TryCatch(async (req, res, next) => {
  const user = await User.findById(req.user);

  if (!user) return next(new ErrorHandler("User not found", 404));

  res.status(200).json({
    success: true,
    user,
  });
});

const Logout = TryCatch(async (req, res, next) => {
  return res
  .status(200)
  .cookie("authToken", null, { ...cookieOptions, maxAge: 0 })
  .json({
    success: true,
    message: "Logged out successfully",
  });
});
const searchUser = TryCatch(async (req, res, next) => {

});


export { newUser,login,getMyProfile,Logout,searchUser };
