import dotenv from 'dotenv';
import database from './database';

dotenv.config();

export default {
  port: process.env.PORT,
  database: database[process.env.NODE_ENV || 'development'],
  api: {
    prefix: '/api',
  },
};
