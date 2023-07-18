import { Users } from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  const users = await Users.find();

  res.status(200).json({
    success: true,
    users,
  });
};

export const newUser = async (req, res) => {
  const { name, email, password } = req.body;

  await Users.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "Registered Successfully",
  });
};

export const userInfo = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);

  res.status(200).json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id);

  res.status(200).json({
    success: true,
    message: "User Updated Successfully!",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully!",
  });
};
