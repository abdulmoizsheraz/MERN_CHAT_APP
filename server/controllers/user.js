import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/sendToken.js";

const newUser = async (req, res) => {
  const { name, bio, username, password } = req.body;
  try {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const LoginUser=async(req,res)=>{
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return res.status(404).json({ error: "User not found"});

  const isMatch = await compare(password, user.password);

  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
   

  sendToken(res, user, 200, `Welcome Back, ${user.name}`);
}

export { newUser,LoginUser };
