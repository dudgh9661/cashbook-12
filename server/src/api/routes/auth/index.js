import { Router } from 'express';
import * as controller from './auth.controller';

const authRouter = Router();

authRouter.get('/user', controller.handleGetAuth);
authRouter.get('/github', controller.handleGithubCallback);
authRouter.delete('/', controller.handleLogout);

export default authRouter;
