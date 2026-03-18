const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async (email, password) => {
  const existingUser = await userModel.getUserByEmail(email);

  if (existingUser) {
    const error = new Error('User already exists');
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userModel.createUser(email, hashedPassword);
};

module.exports = { registerUser };
