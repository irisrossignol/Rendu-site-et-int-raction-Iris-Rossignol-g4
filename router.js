import express from 'express';
import authRoutes from './routes/AuthRoutes.js';
import userRoutes from './routes/UserRoutes.js';

const router = express.Router()

router.use('/auth', authRoutes);
router.use('/user', userRoutes)


export default router;
