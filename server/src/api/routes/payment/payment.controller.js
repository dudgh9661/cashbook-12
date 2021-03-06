import Logger from '../../../loaders/logger';
import {
  createPayment,
  getPayments,
  deletePayment,
} from '../../../services/payment';

export const handleGetPayments = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const payments = await getPayments(userId);

    res.status(200).json(payments);
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleCreatePayment = async (req, res, next) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    if (name) {
      const payment = await createPayment(name, userId);
      res.status(200).json(payment);
    } else {
      res.status(400).json('결제 수단 이름이 필요합니다.');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleDeletePayment = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    if (id) {
      const deletedId = await deletePayment(id, userId);

      res.status(200).json({ deletedId });
    } else {
      res.status(400).json('결제 수단 아이디가 필요합니다.');
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};
