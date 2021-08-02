import Logger from '../../../loaders/logger';
import {
  createHistory,
  getMonthHistory,
  getMonthIncome,
  getMonthExpense,
} from '../../../services/history';

export const handleCreateHistory = async (req, res, next) => {
  try {
    await createHistory(req.body);
    res.status(201).json('history create success');
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetMonthHistory = async (req, res, next) => {
  try {
    const { year, month } = req.query;
    if (year && month) {
      const result = await getMonthHistory(year, month);
      res.status(200).json(result);
    } else {
      res.status(400).json('need year and month query');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetMonthIncome = async (req, res, next) => {
  try {
    const { year, month } = req.query;
    if (year && month) {
      const result = await getMonthIncome(year, month);
      res.status(200).json(result);
    } else {
      res.status(400).json('need year and month query');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetMonthExpense = async (req, res, next) => {
  try {
    const { year, month } = req.query;
    if (year && month) {
      const result = await getMonthExpense(year, month);
      res.status(200).json(result);
    } else {
      res.status(400).json('need year and month query');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};
