import { Op } from 'sequelize';
import sequelize from '../config/sequelize';
import { Category, History } from '../models';

export const createHistory = async data => {
  const { date, content, amount, categoryId, paymentId, userId } = data;
  const result = await History.create({
    content,
    amount,
    date,
    category_id: categoryId,
    payment_id: paymentId,
    user_id: userId,
  });
  return result.dataValues;
};

export const getMonthHistory = async (year, month, userId) => {
  const history = await History.findAll({
    where: {
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
      user_id: userId,
    },
    order: [
      ['date', 'DESC'],
      ['created_at', 'DESC'],
    ],
  });
  return history;
};

export const getMonthIncome = async (year, month, userId) => {
  const history = await History.findAll({
    where: {
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
      amount: {
        [Op.gt]: 0,
      },
      user_id: userId,
    },
    order: [
      ['date', 'DESC'],
      ['created_at', 'DESC'],
    ],
  });
  return history;
};

export const getMonthExpense = async (year, month, userId) => {
  const history = await History.findAll({
    where: {
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
      amount: {
        [Op.lt]: 0,
      },
      user_id: userId,
    },
    order: [
      ['date', 'DESC'],
      ['created_at', 'DESC'],
    ],
  });
  return history;
};

export const updateHistory = async (id, data) => {
  const { date, content, amount, categoryId, paymentId, userId } = data;
  const isExist = await History.findByPk(id);
  if (!isExist) return null;

  const result = await History.update(
    {
      content,
      amount,
      date,
      category_id: categoryId,
      payment_id: paymentId,
    },
    {
      where: {
        id,
        user_id: userId,
      },
    },
  );
  return result;
};

export const deleteHistory = async id => {
  const result = await History.destroy({
    where: { id },
  });
  return result === 1;
};

export const getAllCategoryHistory = async (year, month, userId) => {
  const history = await History.findAll({
    attributes: [
      [sequelize.fn('sum', sequelize.col('amount')), 'total_expenses'],
    ],
    include: [
      {
        model: Category,
      },
    ],
    where: {
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
      amount: {
        [Op.lt]: 0,
      },
      user_id: userId,
    },
    group: 'category_id',
    order: [sequelize.fn('sum', sequelize.col('amount'))],
  });
  return history;
};

export const getCategoryHistory = async (categoryId, year, userId) => {
  const history = await History.findAll({
    attributes: [
      [sequelize.fn('MONTH', sequelize.col('date')), 'month'],
      [sequelize.fn('sum', sequelize.col('amount')), 'total_expenses'],
    ],
    where: {
      date: {
        [Op.gte]: new Date(year),
        [Op.lt]: new Date(parseInt(year, 10) + 1, 0),
      },
      amount: {
        [Op.lt]: 0,
      },
      category_id: categoryId,
      user_id: userId,
    },
    group: [sequelize.fn('MONTH', sequelize.col('date')), 'month'],
    order: [[sequelize.fn('MONTH', sequelize.col('date'))]],
  });
  return history;
};
