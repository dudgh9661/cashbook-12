import { Router } from 'express';
import UserRoutes from './user.js';
import HistoryRoutes from './history.js';

const router = Router();

router.use('/user', UserRoutes);
router.use('/history', HistoryRoutes);

export default router;
