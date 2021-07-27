import Sequelize from 'sequelize';
import sequelize from '../config/database.js';

const { Model, DataTypes } = Sequelize;
export default class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: 'user',
    sequelize,
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);
