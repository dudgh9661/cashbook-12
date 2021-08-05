import { Router } from 'express';
import authRoutes from './routes/auth';
import historyRoutes from './routes/history';
import paymentRoutes from './routes/payment';

const router = Router();

router.use('/auth', authRoutes);
router.use('/histories', historyRoutes);
router.use('/payments', paymentRoutes);

export default router;
