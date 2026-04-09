const AppError = require('../utils/AppError');

const errorHandler = (err, req, res, next) => {
  console.error(err);

  // ошибки AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  // Все остальные
  res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Internal Server Error',
  });
};

module.exports = errorHandler;
