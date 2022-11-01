import mongoose from "mongoose";

const { Schema } = mongoose;

const credit = new Schema(
    {
        amount:Number,
        creditCard:String,
        cvc:String,
        expDate:String
    }

);

export const Credit = mongoose.model("credit",credit );