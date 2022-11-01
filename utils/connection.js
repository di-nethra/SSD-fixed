import mongoose from "mongoose";

export const connect = () => {
  mongoose.connect("mongodb+srv://admin:admin123@cluster0.s8d5qik.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to MongoDb");
  });
};

export const disconnect = (done) => {
  mongoose.disconnect(done);
};