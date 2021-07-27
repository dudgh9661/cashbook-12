import User from '../models/user.js';

export const createUser = async name => {
  await User.create({
    name,
  });
};

export const getUser = async () => {};
