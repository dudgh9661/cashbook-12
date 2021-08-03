import { Router } from 'express';
import * as controller from './user.controller';

const userRouter = Router();

userRouter.post('/', controller.handleCreateUser);
userRouter.get('/', controller.handleGetUser);

export default userRouter;
