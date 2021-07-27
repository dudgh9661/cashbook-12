import expressLoader from './express';
import sequelizeLoader from './sequelize';
import Logger from './logger';

export default async app => {
  await sequelizeLoader();
  Logger.info('DB successfully connected');

  expressLoader(app);
  Logger.info('Express loaded');
};
