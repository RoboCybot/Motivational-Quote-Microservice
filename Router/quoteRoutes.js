import express from "express";
import { getQuote, getFunQuote } from "../Controller/quoteController.js";

const router = express.Router();

router.get("/motivationalQuote", getQuote);

router.get("/funQuote", getFunQuote);

export default router