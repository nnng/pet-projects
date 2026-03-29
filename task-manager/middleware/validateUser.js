const validateUser = (req, res, next) => {
  const { email, password } = req.body;

  // ВАЛИДАЦИЯ EMAIL
  if (!email) {
    return res.status(400).json({
      message: 'Email is required',
    });
  }

  if (typeof email !== 'string') {
    return res.status(400).json({
      message: 'Email must be a string',
    });
  }

  if (email.trim() === '') {
    return res.status(400).json({
      message: 'Email cannot be empty',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Email format is invalid',
    });
  }

  // ВАЛИДАЦИЯ PASSWORD
  if (!password) {
    return res.status(400).json({
      message: 'Password is required',
    });
  }

  if (typeof password !== 'string') {
    return res.status(400).json({
      message: 'Password must be a string',
    });
  }

  if (password.trim() === '') {
    return res.status(400).json({
      message: 'Password cannot be empty',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters',
    });
  }

  if (password.length > 50) {
    return res.status(400).json({
      message: 'Password must be no more than 50 characters',
    });
  }

  next();
};

module.exports = validateUser;
