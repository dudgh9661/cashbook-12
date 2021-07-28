import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Category = sequelize.define(
  'Category',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'category',
    underscored: true,
  },
);

export default Category;
