import express from 'express';
import { login, logout, register } from '../controllers/Auths.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

export default router;
