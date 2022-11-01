import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import multer from "multer";
import "dotenv/config";
import { connect } from "./utils/connection.js";

import passengerRoutes from "./routes/passenger_routes.js";
import tokenRoutes from "./routes/token_routes.js";
import busRoutes from "./routes/bus_routes.js";
import driverRoutes from "./routes/driver_routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

const PORT = process.env.PORT || 5000;

connect();

app.use("/ts", passengerRoutes);
app.use("/ts", tokenRoutes)
app.use("/ts", busRoutes)
app.use("/ts", driverRoutes)


app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });


  export default app;