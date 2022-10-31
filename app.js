import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import multer from "multer";
import "dotenv/config";
import { connect } from "./utils/connection.js";

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

const PORT = process.env.PORT || 5000;

connect();



app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });


  export default app;