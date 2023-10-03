import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env filea

export class Connection {
  constructor() {}

  connect = () => {
    const dbConnectionString = process.env.DB_CONNECTION_STRING;

    if (!dbConnectionString) {
      console.error("DB_CONNECTION_STRING not found in .env file.");
      return;
    }

    mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
      console.log("Connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  };

  disconnect = (done) => {
    mongoose.disconnect(done);
  };
}


