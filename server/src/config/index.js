import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  database: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dbname: process.env.DATABASE_NAME,
  },
  api: {
    prefix: '/api',
  },
};
