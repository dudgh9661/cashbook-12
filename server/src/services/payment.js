import { Payment, User } from '../models';

export const createPayment = async (name, userId) => {
  const payment = await Payment.findOrCreate({ where: { name } });
  const user = await User.findOne({ where: { id: userId } });
  const userHasPayment = await user.hasPayment(payment[0].id);

  if (!userHasPayment) {
    await user.addPayment(payment[0]);
    return payment[0].toJSON();
  }

  throw Error('aleadty exists');
};

export const getPayments = async userId => {
  const userPayments = await User.findAll({
    where: { id: userId },
    include: [Payment],
  });
  const payments = userPayments[0].Payments.map(p => p.toJSON());

  return payments;
};

export const deletePayment = async (paymentId, userId) => {
  const user = await User.findOne({ where: { id: userId } });
  const userHasPayment = await user.hasPayment(+paymentId);

  if (userHasPayment) {
    user.removePayment(paymentId);
    return paymentId;
  }

  throw Error('Not belong to the user');
};
