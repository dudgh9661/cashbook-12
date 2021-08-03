import { Sequelize } from 'sequelize';
import sequelize from '../config/sequelize';
import { User, Category, Payment, History } from '../models';

export default async () => {
  const db = {
    sequelize,
    Sequelize,
    User,
    Category,
    Payment,
    History,
  };

  await db.sequelize.sync();
};
