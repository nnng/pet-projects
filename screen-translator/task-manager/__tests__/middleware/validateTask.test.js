const validateTask = require('../../middleware/validateTask');

describe('validateTask middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('Title validation', () => {
    test('should return 400 if title is missing', () => {
      req.body = { completed: false };

      validateTask(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 'error',
        statusCode: 400,
        message: 'Title is required',
      });
      expect(next).not.toHaveBeenCalled();
    });

    test('should return 400 if title is not a string', () => {
      req.body = { title: 123, completed: false };

      validateTask(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 'error',
        statusCode: 400,
        message: 'Title must be a string',
      });
      expect(next).not.toHaveBeenCalled();
    });

    test('should return 400 if title is only whitespace', () => {
      req.body = { title: ' ', completed: false };

      validateTask(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 'error',
        statusCode: 400,
        message: 'Title cannot be empty',
      });
      expect(next).not.toHaveBeenCalled();
    });

    test('should return 400 if title is more than 120 characters', () => {
      req.body = { title: 'a'.repeat(121), completed: false };

      validateTask(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 'error',
        statusCode: 400,
        message: 'Title must be no more than 120 characters',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('Completed validation', () => {
    test('should return 400 if completed is not a boolean', () => {
      req.body = { title: 'Test task', completed: 'true' };

      validateTask(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 'error',
        statusCode: 400,
        message: 'Completed must be a boolean (true or false)',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('Valid data', () => {
    test('should call next() if title is valid and completed is not provided', () => {
      req.body = { title: 'Test task' };

      validateTask(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });

    test('should call next() if title and completed are valid', () => {
      req.body = { title: 'Test task', completed: true };

      validateTask(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });
  });
});
