import mongoose from "mongoose";

const { Schema } = mongoose;

const token = new Schema(
    {
        tokenId:String,
        tokenValidityTime:String,
        tokenCreditBalance:Float
    }

);

export const Token = mongoose.model("tokenUsers",token );