import { History } from '../models';

export const createHistory = async data => {
  const { date, content, amount, categoryId, paymentId, userId } = data;
  await History.create({
    content,
    amount,
    date,
    category_id: categoryId,
    payment_id: paymentId,
    user_id: userId,
  });
};

export const getAllHistory = async () => {
  const history = await History.findAll();
  return history;
};
