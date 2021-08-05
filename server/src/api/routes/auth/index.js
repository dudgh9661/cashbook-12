import { Router } from 'express';
import * as controller from './auth.controller';

const authRouter = Router();

authRouter.get('/user', controller.handleGetAuth);

authRouter.post('/name', controller.handleCreateUser);
authRouter.get('/github', controller.handleGithubCallback);

authRouter.delete('/', controller.handleLogout);

export default authRouter;
