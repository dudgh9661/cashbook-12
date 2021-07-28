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
      connectTimeout: 1000,
      typeCast: true,
    },
    define: {
      timestamps: false,
    },
  },
);

export default sequelize;
