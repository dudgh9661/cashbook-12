import dotenv from 'dotenv';
import database from './database';

dotenv.config();

export default {
  isDev: process.env.NODE_ENV === 'development',
  port: process.env.PORT,
  database: database[process.env.NODE_ENV || 'development'],
  api: {
    prefix: '/api',
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  jwt: {
    scretKey: process.env.JWT_SECRET_KEY,
  },
};
