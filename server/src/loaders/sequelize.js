import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';
import { User, History } from '../models/index.js';

export default async () => {
  const db = {
    sequelize,
    Sequelize,
    User,
    History,
  };
  const connection = await db.sequelize.sync();
  return connection;
};
