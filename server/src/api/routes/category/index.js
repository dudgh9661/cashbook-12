import { Router } from 'express';
import * as controller from './category.controller';

const categoryRouter = Router();

categoryRouter.get('/', controller.handleGetCategories);

export default categoryRouter;
