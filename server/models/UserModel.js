// Basic USER ID, Name, password, email, and meals
// Meal will reference meals table, to be an array of all meals
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Trip model
class User extends Model {
 checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
 }
}

// create fields/columns for Trip model
User.init(
 {
  id: {
   type: DataTypes.INTEGER,
   allowNull: false,
   primaryKey: true,
   autoIncrement: true,
  },
  name: {
   type: DataTypes.STRING,
   allowNull: true,
  },
  height: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: true,
  },
  weight: {
   type: DataTypes.INTEGER,
   allowNull: true,
  },
  email: {
   type: DataTypes.STRING,
   allowNull: false,
   unique: true,
   validate: {
    isEmail: true,
   },
  },
  password: {
   type: DataTypes.STRING,
   allowNull: false,
   validate: {
    len: [4],
   },
  },
 },
 {
  hooks: {
   // set up beforeCreate lifecycle "hook" functionality
   beforeCreate: async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
   },
   beforeUpdate: async (updatedUserData) => {
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
   },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'User',
 }
);

module.exports = User;

