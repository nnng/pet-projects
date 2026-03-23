const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const loginUser = async (email, password) => {
  const user = await userModel.getUserByEmail(email);

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 400;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    const error = new Error('Invalid email or password');
    error.statusCode = 400;
    throw error;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return {
    user: {
      id: user.id,
      email: user.email,
    },
    token,
  };
};

module.exports = { registerUser, loginUser };
