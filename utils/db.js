require("dotenv").config();
const mongoose = require("mongoose");

// Ensure NODE_ENV is defined and correctly interpreted
const isProduction = process.env.NODE_ENV === "production";

// Use the correct database URI
const uri = isProduction ? process.env.DB_CONNECTION : process.env.LOCAL_DB_CONNECTION;

if (!uri) {
    throw new Error("Database connection URI is missing. Check your .env file.");
}

// mongoose.set("strictQuery", true);

const mongoConnection = uri;
mongoose.set("strictQuery", true)

module.exports = mongoConnection;
