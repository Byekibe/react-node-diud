import express from 'express';
import { addUser } from '../controllers/Users.js';

const router = express.Router();

router.get("/", addUser);

export default router;

