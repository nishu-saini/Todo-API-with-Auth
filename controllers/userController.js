import { Users } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await Users.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    sendCookie(user, res, "Registered SuccessFully!", 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new ErrorHandler("User Already Exist", 400));

    sendCookie(user, res, `Welcome Back, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
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
