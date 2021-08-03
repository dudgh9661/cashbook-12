import { Router } from 'express';
import * as controller from './auth.controller';

const authRouter = Router();

authRouter.get('/github', controller.handleGithubCallback);
authRouter.post('/logout', controller.handleLogout);

export default authRouter;
