import { User } from '../models';

export const createUser = async name => {
  await User.create({ name });
};

export const getAllUser = async () => {
  const allUser = await User.findAll();
  return allUser;
};
