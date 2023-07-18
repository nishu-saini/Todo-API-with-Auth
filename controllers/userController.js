import { Users } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await Users.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User Already Exist",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await Users.create({
    name,
    email,
    password: hashedPassword,
  });

  sendCookie(user, res, "Registered SuccessFully!", 201);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email }).select("+password");

  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  sendCookie(user, res, `Welcome Back, ${user.name}`, 200);
};

// Get user detail
export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      message: "Logout Successfully!",
    });
};
