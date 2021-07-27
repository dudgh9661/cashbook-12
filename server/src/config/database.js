import { Sequelize } from 'sequelize';
import config from './index.js';

console.log(
  config.database.DATABASE_NAME,
  config.database.DATABASE_USERNAME,
  config.database.DATABASE_PASSWORD,
  config.database.DATABASE_HOST,
);
const sequelize = new Sequelize(
  config.database.DATABASE_NAME,
  config.database.DATABASE_USERNAME,
  config.database.DATABASE_PASSWORD,
  {
    host: config.database.DATABASE_HOST,
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
