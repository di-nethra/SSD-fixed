import mongoose from "mongoose";

const { Schema } = mongoose;

const credit = new Schema(
    {
        amount:Number,
        creditCard:String,
        cvc:String,
        ExpDate:String
    }

);

export const Credit = mongoose.model("credit",credit );