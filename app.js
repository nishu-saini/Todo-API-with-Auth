import express from "express";
import userRouter from "./routes/userRoute.js";
import { config } from "dotenv";

const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use("/api/v1", userRouter);

export default app;
