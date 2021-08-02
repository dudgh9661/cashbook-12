import { Router } from 'express';
import userRoutes from './routes/user';
import historyRoutes from './routes/history';
import paymentRoutes from './routes/payment';
import authRoutes from './routes/auth';

const router = Router();

router.use('/users', userRoutes);
router.use('/histories', historyRoutes);
router.use('/payments', paymentRoutes);
router.use('/auth', authRoutes);

export default router;
