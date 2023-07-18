import express from "express";
import userRouter from "./routes/userRoute.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());

// Using Routes
app.use("/api/v1/user", userRouter);

export default app;
