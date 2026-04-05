const userController = require('../../controllers/userController');
const userService = require('../../services/userService');

jest.mock('../../services/userService', () => ({
  registerUser: jest.fn(),
  loginUser: jest.fn(),
}));

describe('userController', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    test('should return 201 with new user on success', async () => {
      req.body = { email: 'test@test.com', password: '123456' };
      const mockUser = { id: 1, email: 'test@test.com' };
      userService.registerUser.mockResolvedValue(mockUser);

      await userController.registerUser(req, res, next);

      expect(userService.registerUser).toHaveBeenCalledWith('test@test.com', '123456');
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockUser);
    });

    test('should call next() with error if service throws', async () => {
      req.body = { email: 'test@test.com', password: '123456' };
      const mockError = new Error('User already exists');
      userService.registerUser.mockRejectedValue(mockError);

      await userController.registerUser(req, res, next);

      expect(next).toHaveBeenCalledWith(mockError);
    });
  });

  describe('loginUser', () => {
    test('should return 200 with user and token on success', async () => {
      req.body = { email: 'test@test.com', password: '123456' };
      const mockResult = {
        user: { id: 1, email: 'test@test.com' },
        token: 'mock.jwt.token',
      };
      userService.loginUser.mockResolvedValue(mockResult);

      await userController.loginUser(req, res, next);

      expect(userService.loginUser).toHaveBeenCalledWith('test@test.com', '123456');
      expect(res.json).toHaveBeenCalledWith(mockResult);
    });

    test('should call next() with error if service throws', async () => {
      req.body = { email: 'test@test.com', password: '123456' };
      const mockError = new Error('Invalid email or password');
      userService.loginUser.mockRejectedValue(mockError);

      await userController.loginUser(req, res, next);

      expect(next).toHaveBeenCalledWith(mockError);
    });
  });
});
