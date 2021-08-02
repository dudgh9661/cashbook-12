import { DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';

const Payment = sequelize.define(
  'Payment',
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
    tableName: 'payment',
    underscored: true,
    timestamps: false,
  },
);

export default Payment;
