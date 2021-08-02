import { DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';

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
    value: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'category',
    underscored: true,
    timestamps: false,
  },
);

export default Category;
