import Logger from '../../../loaders/logger';
import { createUser } from '../../../services/user';

export const handleCreateUser = async (req, res, next) => {
  const { name } = req.body;
  try {
    await createUser(name);
    res.status(201).json();
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const lint = () => {};
