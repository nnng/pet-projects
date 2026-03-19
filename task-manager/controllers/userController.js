const userService = require('../services/userService');
const asyncHandler = require('../middleware/asyncHandler');

const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.registerUser(email, password);

  res.status(201).json(user);
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.loginUser(email, password);

  res.json(user);
});

module.exports = { register, login };
