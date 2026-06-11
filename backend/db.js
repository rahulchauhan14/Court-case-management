import mongoose from "mongoose";

const connectDB=async ()=>{
    try {
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MongoDB connection URI not found. Please set MONGO_URI or MONGODB_URI in your .env file.");
        }
        await mongoose.connect(uri)
        console.log("DB connected")
    } catch (error) {
        console.log("Error in db.js",error)
        process.exit(1)
    }
}
export default connectDB