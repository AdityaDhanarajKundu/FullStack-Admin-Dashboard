import express, { Router } from 'express';


const router = express.Router();

router.get("/admins", getAdmin);

export default router;