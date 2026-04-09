const authMiddleware = require('../../middleware/authMiddleware');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

describe('authMiddleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { headers: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  test('should return 401 if authorization header is missing', () => {
    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should return 401 if authorization header does not start with Bearer', () => {
    req.headers.authorization = 'Basic sometoken';

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should return 401 if token is invalid', () => {
    req.headers.authorization = 'Bearer invalid.token';
    jwt.verify.mockImplementation(() => {
      throw new Error('invalid token');
    });

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should call next() and set req.user if token is valid', () => {
    req.headers.authorization = 'Bearer valid.token';
    const mockDecoded = { id: 1 };
    jwt.verify.mockReturnValue(mockDecoded);

    authMiddleware(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith('valid.token', process.env.JWT_SECRET);
    expect(req.user).toEqual(mockDecoded);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
});
