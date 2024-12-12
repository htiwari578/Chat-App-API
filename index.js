import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'





dotenv.config();
const app = express();
app.use(cookieParser());
// midllware
app.use(express.json());

const PORT = process.env.PORT || 3000;

// api
app.use("/api/h4/user", userRoute);
app.use("/api/h4/message", messageRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})