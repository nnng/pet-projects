const userService = require('../../services/userService');
const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

jest.mock('../../models/userModel', () => ({
  getUserByEmail: jest.fn(),
  createUser: jest.fn(),
}));
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('userService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    test('should create and return new user', async () => {
      userModel.getUserByEmail.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue('hashed_password');
      userModel.createUser.mockResolvedValue({ id: 1, email: 'test@test.com' });

      const result = await userService.registerUser('test@test.com', '123456');

      expect(userModel.getUserByEmail).toHaveBeenCalledWith('test@test.com');
      expect(bcrypt.hash).toHaveBeenCalledWith('123456', 10);
      expect(userModel.createUser).toHaveBeenCalledWith('test@test.com', 'hashed_password');
      expect(result).toEqual({ id: 1, email: 'test@test.com' });
    });

    test('should throw error if user already exists', async () => {
      userModel.getUserByEmail.mockResolvedValue({ id: 1, email: 'test@test.com' });

      await expect(userService.registerUser('test@test.com', '123456')).rejects.toThrow(
        'User already exists'
      );

      expect(userModel.createUser).not.toHaveBeenCalled();
    });
  });

  describe('loginUser', () => {
    test('should return user and token on success', async () => {
      const mockUser = { id: 1, email: 'test@test.com', password: 'hashed_password' };
      userModel.getUserByEmail.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('mock.jwt.token');

      const result = await userService.loginUser('test@test.com', '123456');

      expect(bcrypt.compare).toHaveBeenCalledWith('123456', 'hashed_password');
      expect(result).toEqual({
        user: { id: 1, email: 'test@test.com' },
        token: 'mock.jwt.token',
      });
    });

    test('should throw error if user not found', async () => {
      userModel.getUserByEmail.mockResolvedValue(null);

      await expect(userService.loginUser('test@test.com', '123456')).rejects.toThrow(
        'Invalid email or password'
      );

      expect(bcrypt.compare).not.toHaveBeenCalled();
    });

    test('should throw error if password does not match', async () => {
      const mockUser = { id: 1, email: 'test@test.com', password: 'hashed_password' };
      userModel.getUserByEmail.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(false);

      await expect(userService.loginUser('test@test.com', 'wrongpassword')).rejects.toThrow(
        'Invalid email or password'
      );

      expect(jwt.sign).not.toHaveBeenCalled();
    });
  });
});
