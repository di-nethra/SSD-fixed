import mongoose from "mongoose";

const { Schema } = mongoose;

const journey = new Schema(
    {
        jouneyCode:Number,
        startUpLocation:String,
        destination:String,
        departureTime:String,
        journeyEndTime:String,
        date:String
    }

);

export const Journey = mongoose.model("journeyUsers",journey );