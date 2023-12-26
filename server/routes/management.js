import express, { Router } from 'express';
import {getAdmin} from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmin);

export default router;