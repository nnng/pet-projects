const validateTask = (req, res, next) => {
  const { title } = req.body;

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

  next();
};

module.exports = validateTask;
