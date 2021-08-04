import { Op } from 'sequelize';
import { History, Category, Payment } from '../models';

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

export const getHistory = async id => {
  const result = await History.findOne({
    where: { id },
    include: [Category, Payment],
  });

  return result.dataValues;
};

export const getMonthHistory = async (year, month, userId) => {
  const history = await History.findAll({
    where: {
      user_id: userId,
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
    },
    order: [
      ['date', 'DESC'],
      ['created_at', 'DESC'],
    ],
    include: [Category, Payment],
  });
  return history;
};

export const getMonthIncome = async (year, month) => {
  const history = await History.findAll({
    where: {
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
      amount: {
        [Op.gt]: 0,
      },
    },
    order: [
      ['date', 'DESC'],
      ['created_at', 'DESC'],
    ],
  });
  return history;
};

export const getMonthExpense = async (year, month) => {
  const history = await History.findAll({
    where: {
      date: {
        [Op.gte]: new Date(year, month - 1),
        [Op.lt]: new Date(year, month),
      },
      amount: {
        [Op.lt]: 0,
      },
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
