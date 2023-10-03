import mongoose from "mongoose";

export class Connection{
  constructor(){}
  connect = () => {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.s8d5qik.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
      console.log("connected to MongoDb");
    });
  };
  
  disconnect = (done) => {
    mongoose.disconnect(done);
  };
}



