import Logger from '../../../loaders/logger';
import { getCategories } from '../../../services/category';

export const handleGetCategories = async (req, res, next) => {
  try {
    const categoires = await getCategories();
    res.status(200).json(categoires);
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const lint = () => {};
