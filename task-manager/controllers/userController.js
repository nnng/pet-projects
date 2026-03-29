const userService = require('../services/userService');
const asyncHandler = require('../middleware/asyncHandler');
const AppError = require('../utils/AppError');

// регистрация пользователя
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const newUser = await userService.registerUser(email, password);

  res.status(201).json(newUser);
});

// вход пользователя
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.loginUser(email, password);

  res.json(result);
});

module.exports = {
  registerUser,
  loginUser,
};
