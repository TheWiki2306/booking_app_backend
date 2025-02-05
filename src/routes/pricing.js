import express from "express";
import { calculatePriceHandler } from "../controller/priceHandler.js";


export const router = express.Router();

router.post('/calculateprice', calculatePriceHandler);
router.get('/price', (req, res) => {
    res.json({message: 'this is the price'})
})

