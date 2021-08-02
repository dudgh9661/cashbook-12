import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 1000,
      typeCast: true,
    },
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 1000,
      typeCast: true,
    },
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 1000,
      typeCast: true,
    },
  },
};
