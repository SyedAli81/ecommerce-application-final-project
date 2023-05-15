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

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = User;

