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
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

// Home Route..
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Great! Now go to the following URL to know about Routes of Todo APP`,
    URL: `https://github.com/nishu-saini/Todo-API-with-Auth`,
  });
});

// Using Error Middleware
app.use(errorMiddleware);

export default app;
