import express from 'express';
import authRoutes from './routes/AuthRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import iotRoutes from './routes/IotRoutes.js';

const router = express.Router()

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/iot', iotRoutes);

export default router;