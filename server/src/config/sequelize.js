import { Sequelize } from 'sequelize';
import config from './index';

export default new Sequelize(config.database);
