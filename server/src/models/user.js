import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'user',
    underscored: true,
    timestamps: false,
  },
);

User.associate = models => {
  User.belongsToMany(models.Payment, { through: 'UsertToPayment' });
};
export default User;
