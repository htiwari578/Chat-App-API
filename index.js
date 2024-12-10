import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./utils/db.js";





dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})