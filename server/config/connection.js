import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/sportsweb');

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
