import { Router } from 'express';
import handleGithubCallback from './auth.controller';

const authRouter = Router();

authRouter.get('/github', handleGithubCallback);

export default authRouter;
