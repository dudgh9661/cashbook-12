import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import User from './user';
import Category from './category';
import Payment from './payment';

const History = sequelize.define(
  'History',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    payment_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'history',
    underscored: true,
    timestamps: true,
  },
);

History.belongsTo(Category, { foreignKey: 'category_id' });
History.belongsTo(Payment, { foreignKey: 'payment_id' });
History.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

export default History;
