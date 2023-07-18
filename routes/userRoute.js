import express from "express";
import {
  deleteUser,
  getAllUsers,
  newUser,
  updateUser,
  userInfo,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/user/all", getAllUsers);

router.post("/user/new", newUser);

router.route("/user/:id").get(userInfo).put(updateUser).delete(deleteUser);

export default router;
