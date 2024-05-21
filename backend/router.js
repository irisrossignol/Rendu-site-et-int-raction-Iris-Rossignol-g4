import express from 'express';
import authRoutes from './routes/AuthRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import iotRoutes from './routes/IotRoutes.js';
import cardsRoutes from './routes/cardsRoutes.js';

const router = express.Router()

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/iot', iotRoutes);
router.use('/details', cardsRoutes);

export default router;