import { Category } from '../models';

export const getCategories = async () => {
  const categories = await Category.findAll({});

  return categories;
};

export const lint = () => {};
