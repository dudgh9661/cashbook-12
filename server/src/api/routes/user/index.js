import { Router } from 'express';
import * as controller from './user.controller';

const userRouter = Router();

userRouter.post('/', controller.handleCreateUser);

export default userRouter;
