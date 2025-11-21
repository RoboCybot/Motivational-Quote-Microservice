import dotenv from "dotenv";
import * as quoteModel from "../Model/quoteModel.js"

dotenv.config;

export const getQuote = async (res) => {
    const result = await quoteModel.getQuote();
    return res.status(200).json(result);
};

export const getFunQuote = async (res) => {
    const result = await quoteModel.getFunQuote();
    return res.status(200).json(result);
};