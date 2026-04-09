const validateUser = (req, res, next) => {
  const { email, password } = req.body;

  const sendValidationError = (message) =>
    res.status(400).json({
      status: 'error',
      statusCode: 400,
      message,
    });

  // ВАЛИДАЦИЯ EMAIL
  if (!email) {
    return sendValidationError('Email is required');
  }

  if (typeof email !== 'string') {
    return sendValidationError('Email must be a string');
  }

  if (email.trim() === '') {
    return sendValidationError('Email cannot be empty');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return sendValidationError('Email format is invalid');
  }

  // ВАЛИДАЦИЯ PASSWORD
  if (!password) {
    return sendValidationError('Password is required');
  }

  if (typeof password !== 'string') {
    return sendValidationError('Password must be a string');
  }

  if (password.trim() === '') {
    return sendValidationError('Password cannot be empty');
  }

  if (password.length < 6) {
    return sendValidationError('Password must be at least 6 characters');
  }

  if (password.length > 50) {
    return sendValidationError('Password must be no more than 50 characters');
  }

  next();
};

module.exports = validateUser;
