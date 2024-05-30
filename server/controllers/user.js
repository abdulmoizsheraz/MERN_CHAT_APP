import { User } from '../models/user.js';

const newUser = async (req, res) => {
    const {name,bio,username,password} = req.body;
  try {
    const avatar = {
      public_id: "123456789",
      url: "https://res.cloudinary.com/dx9n8ts0c/image/upload/v1630124542/123456789.jpg"
    };

    const user = new User({
      name: name,
      username: "john_doe",
      password: "123456",
      avatar,
    });

    const savedUser = await user.save();
    res.status(201).json({ user: savedUser, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { newUser };
