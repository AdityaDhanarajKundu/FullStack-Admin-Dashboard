import express, { Router } from 'express';
import { getProducts, getCustomers, getTransactions } from "../controllers/client.js";
import { get } from 'mongoose';

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get("/transactions", getTransactions);

export default router;