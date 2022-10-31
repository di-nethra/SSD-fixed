import mongoose from "mongoose";

const { Schema } = mongoose;

const bus = new Schema(
    {
        busid:Integer,
        owner:String,
        routeName:String,
        busRegisterNumber:String,
        seatCapacity:String
    }

);

export const Bus = mongoose.model("busUsers",bus );