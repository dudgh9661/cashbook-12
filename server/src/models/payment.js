import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

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

Payment.associate = models => {
  Payment.belongsToMany(models.User, { through: 'user_to_payment' });
};

export default Payment;
