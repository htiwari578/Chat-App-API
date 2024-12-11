import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./utils/db.js";
import userRoute from './routes/user.route.js'





dotenv.config();
const app = express();
// midllware
app.use(express.json());

const PORT = process.env.PORT || 3000;

// api
app.use("/api/h4/user", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})