import Logger from '../../../loaders/logger';
import {
  createHistory,
  getHistory,
  getMonthHistory,
  getMonthIncome,
  getMonthExpense,
  updateHistory,
  deleteHistory,
  getAllCategoryHistory,
  getCategoryHistory,
} from '../../../services/history';

export const handleCreateHistory = async (req, res, next) => {
  try {
    const result = await createHistory(req.body);
    const cateogry = await getHistory(+result.id);
    if (result) {
      res.status(200).json(cateogry);
    } else {
      res.status(400).json('history create failed');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetMonthHistory = async (req, res, next) => {
  try {
    const { year, month } = req.query;
    const userId = req.user.id;

    if (year && month) {
      const result = await getMonthHistory(year, month, userId);
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
    const userId = req.user.id;

    if (year && month) {
      const result = await getMonthIncome(year, month, userId);
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
    const userId = req.user.id;

    if (year && month) {
      const result = await getMonthExpense(year, month, userId);
      res.status(200).json(result);
    } else {
      res.status(400).json('need year and month query');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleUpdateHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateHistory(id, req.body);
    if (result) {
      res.status(200).json('history update success');
    } else {
      res.status(400).json('history update failed');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleDeleteHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteHistory(id);
    if (result) {
      res.status(200).json('history delete success');
    } else {
      res.status(400).json('history delete failed');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetAllCategoryHistory = async (req, res, next) => {
  try {
    const { year, month } = req.query;
    const userId = req.user.id;

    if (year && month) {
      const result = await getAllCategoryHistory(year, month, userId);
      res.status(200).json(result);
    } else {
      res.status(400).json('need year and month query');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetCategoryHistory = async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.id, 10);
    const { year } = req.query;
    const userId = req.user.id;

    if (year) {
      const result = await getCategoryHistory(categoryId, year, userId);
      res.status(200).json(result);
    } else {
      res.status(400).json('need year query');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};
