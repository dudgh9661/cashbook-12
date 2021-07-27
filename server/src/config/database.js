import { Sequelize } from 'sequelize';
import config from './index';

const sequelize = new Sequelize(
  config.database.dbname,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Etc/GMT+9',
      connectTimeout: 1000,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      dateStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: false,
    },
    timezone: '+09:00',
  },
);

export default sequelize;
