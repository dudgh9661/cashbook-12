import { Router } from 'express';
import * as controller from './payment.controller';

const paymentRouter = Router();

paymentRouter.get('/', controller.handleGetPayments);
paymentRouter.post('/', controller.handleCreatePayment);
paymentRouter.delete('/:id', controller.handleDeletePayment);

export default paymentRouter;
