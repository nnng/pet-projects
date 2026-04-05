const validateUser = require('../../middleware/validateUser');

describe('validateUser middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('Email validation', () => {
    test('should return 400 if email is missing', () => {
      req.body = { password: '123456' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Email is required',
      });
    });

    test('should return 400 if email is not a string', () => {
      req.body = { email: 123, password: '123456' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Email must be a string',
      });
    });

    test('should return 400 if email is only whitespace', () => {
      req.body = { email: '   ', password: '123456' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Email cannot be empty',
      });
    });

    test('should return 400 if email format is invalid', () => {
      req.body = { email: 'invalid-email', password: '123456' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Email format is invalid',
      });
    });
  });

  describe('Password validation', () => {
    test('should return 400 if password is missing', () => {
      req.body = { email: 'test@test.com' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Password is required',
      });
    });

    test('should return 400 if password is not a string', () => {
      req.body = { email: 'test@test.com', password: 123456 };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Password must be a string',
      });
    });

    test('should return 400 if password is only whitespace', () => {
      req.body = { email: 'test@test.com', password: '   ' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Password cannot be empty',
      });
    });

    test('should return 400 if password is less than 6 characters', () => {
      req.body = { email: 'test@test.com', password: '12345' };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Password must be at least 6 characters',
      });
    });

    test('should return 400 if password is more than 50 characters', () => {
      req.body = { email: 'test@test.com', password: 'a'.repeat(51) };

      validateUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Password must be no more than 50 characters',
      });
    });
  });

  describe('Valid data', () => {
    test('should call next() if email and password are valid', () => {
      req.body = { email: 'test@test.com', password: '123456' };

      validateUser(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });
  });
});