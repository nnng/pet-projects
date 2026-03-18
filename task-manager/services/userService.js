const userModel = require('../models/userModel');

const registerUser = async (email, password) => {
  const existingUser = await userModel.getUserByEmail(email);

  if (existingUser) {
    const error = new Error('User already exists');
    error.statusCode = 400;
    throw error;
  }

  return await userModel.createUser(email, password);
};

module.exports = { registerUser };
