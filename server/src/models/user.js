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
    github_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      unique: true,
    },
    avatar_url: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: 'user',
    underscored: true,
    timestamps: false,
  },
);

User.associate = models => {
  User.belongsToMany(models.Payment, { through: 'user_to_payment' });
};

export default User;
