import express, { Router } from 'express';


const router = express.Router();

router.get("/admin", getAdmin);

export default router;