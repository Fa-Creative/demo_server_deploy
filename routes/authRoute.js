import express from 'express';
import { createAccount } from '../controllers/auth.js';

const router = express.Router();

router.get("/create", createAccount)


export default router;