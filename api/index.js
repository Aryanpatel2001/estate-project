import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import exp from "constants";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connect mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is listing on port 3000");
});

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
