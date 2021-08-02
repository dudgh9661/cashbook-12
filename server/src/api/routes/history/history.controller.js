import Logger from '../../../loaders/logger';
import { createHistory } from '../../../services/history';

export const handleCreateHistory = async (req, res, next) => {
  try {
    await createHistory(req.body);
    res.status(201).json('history create success');
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleWhat = async (req, res, next) => {
  try {
    res.status(200).json('test');
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};
