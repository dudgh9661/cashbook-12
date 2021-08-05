import { Router } from 'express';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import historyRoutes from './routes/history';
import paymentRoutes from './routes/payment';
import categoryRoutes from './routes/category';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/histories', historyRoutes);
router.use('/payments', paymentRoutes);
router.use('/categories', categoryRoutes);

export default router;
