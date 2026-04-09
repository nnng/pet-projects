const validateTask = (req, res, next) => {
  const { title, completed } = req.body;

  const sendValidationError = (message) =>
    res.status(400).json({
      status: 'error',
      statusCode: 400,
      message,
    });

  if (!title) {
    return sendValidationError('Title is required');
  }

  if (typeof title !== 'string') {
    return sendValidationError('Title must be a string');
  }

  if (title.trim() === '') {
    return sendValidationError('Title cannot be empty');
  }

  if (title.length > 120) {
    return sendValidationError('Title must be no more than 120 characters');
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return sendValidationError('Completed must be a boolean (true or false)');
    }
  }

  next();
};

module.exports = validateTask;
