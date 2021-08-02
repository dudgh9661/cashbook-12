import { Router } from 'express';
import userRoutes from './routes/user';
import historyRoutes from './routes/history';

const router = Router();

router.use('/users', userRoutes);
router.use('/histories', historyRoutes);

export default router;
