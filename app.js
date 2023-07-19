import express from "express";
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Using Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

// Using Error Middleware
app.use(errorMiddleware);

export default app;
