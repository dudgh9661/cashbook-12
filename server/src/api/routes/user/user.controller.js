import Logger from '../../../loaders/logger';
import { createUser, getAllUser } from '../../../services/user';

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

export const handleGetAllUser = async (req, res, next) => {
  try {
    const result = await getAllUser();
    res.status(200).json(result);
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};
