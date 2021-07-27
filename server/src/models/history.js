import Sequelize from 'sequelize';
import sequelize from '../config/database.js';

const { Model, DataTypes } = Sequelize;
export default class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: 'history',
    sequelize,
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);
