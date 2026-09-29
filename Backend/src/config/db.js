import mongoose from "mongoose";
import "./config.js"; //  env load + validatio

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
};

export default connectDB;