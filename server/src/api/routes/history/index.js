import { Router } from 'express';
import * as controller from './history.controller';

const historyRouter = Router();

historyRouter.post('/', controller.handleCreateHistory);

export default historyRouter;
