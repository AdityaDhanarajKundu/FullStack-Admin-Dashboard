import express, { Router } from 'express';
import { getProducts, getCustomers, getTransactions, getGeography } from "../controllers/client.js";
import { get } from 'mongoose';

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;