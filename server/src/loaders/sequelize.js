import { Sequelize } from 'sequelize';
import config from '../config';
import { User, Category, Payment, History } from '../models';

export const sequelize = new Sequelize(config.database);

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
