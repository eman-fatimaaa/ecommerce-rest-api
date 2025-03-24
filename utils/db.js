const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = process.env.DB_CONNECTION;
    if (!uri) {
      throw new Error("DB_CONNECTION is not defined in environment variables");
    }

    await mongoose.connect(uri);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("No DB connection!", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
