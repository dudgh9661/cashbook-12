import expressLoader from './express';
import sequelizeLoader from './sequelize';

export default async app => {
  await sequelizeLoader();
  console.info('DB successfully connected');

  expressLoader(app);
  console.info('Express loaded');
};
