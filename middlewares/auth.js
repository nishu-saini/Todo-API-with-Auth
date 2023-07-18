import { Users } from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First!",
    });

  const decode = JWT.verify(token, process.env.JWT_Secret);

  req.user = await Users.findById(decode._id);

  next();
};
