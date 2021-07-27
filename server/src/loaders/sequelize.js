import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import { User, History } from '../models';

export default async () => {
  const db = {
    sequelize,
    Sequelize,
    User,
    History,
  };

  await db.sequelize.sync();
};
