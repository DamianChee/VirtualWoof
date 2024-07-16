const { Client } = require("pg");

const connectDB = async () => {
  try {
    const client = new Client({
      user: "postgres",
      host: "localhost",
      database: "your_database",
      password: "password",
      port: "5432",
    });

    await client.connect();
    console.log("DB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

/**
 * Old Mangoose Codes
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/VirtualWoof");
    console.log("DB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
 */
