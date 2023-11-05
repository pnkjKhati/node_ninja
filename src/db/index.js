import mongoose from "mongoose";
import { DATABASE } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.CONNECTION_URI}/${DATABASE}`
    );
    console.log(
      ` DB connected successfully ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database connection failed :: ", error);
    process.exit(1);
  }
};

export default connectDB;
