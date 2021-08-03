import { Router } from 'express';
import * as controller from './history.controller';

const historyRouter = Router();

historyRouter.post('/', controller.handleCreateHistory);

historyRouter.get('/', controller.handleGetMonthHistory);
historyRouter.get('/income', controller.handleGetMonthIncome);
historyRouter.get('/expense', controller.handleGetMonthExpense);

historyRouter.put('/:id', controller.handleUpdateHistory);
historyRouter.delete('/:id', controller.handleDeleteHistory);

export default historyRouter;
