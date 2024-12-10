import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connect");
    } catch (error) {
        console.log("MongoDb not connected");
    }
}

export default connectDB;