const validateTask = (req, res, next) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({
      message: 'Title is required',
    });
  }

  if (typeof title !== 'string') {
    return res.status(400).json({
      message: 'Title must be a string',
    });
  }

  if (title.trim() === '') {
    return res.status(400).json({
      message: 'Title cannot be empty',
    });
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({
        message: 'Completed must be a boolean (true or false)',
      });
    }
  }

  next();
};

module.exports = validateTask;
