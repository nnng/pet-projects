const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');

const registerUser = async (email, password) => {
  const existingUser = await userModel.getUserByEmail(email);

  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.createUser(email, hashedPassword);

  return {
    id: user.id,
    email: user.email,
  };
};

const loginUser = async (email, password) => {
  const user = await userModel.getUserByEmail(email);

  if (!user) {
    throw new AppError('Invalid email or password', 400);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError('Invalid email or password', 400);
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
