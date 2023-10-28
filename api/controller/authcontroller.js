import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedpassword = await bcryptjs.hash(password, 10);
  const newuser = await User.create({
    username,
    password: hashedpassword,
    email,
  });
  res.status(201).json({
    newuser,
    message: "createed",
  });
};
