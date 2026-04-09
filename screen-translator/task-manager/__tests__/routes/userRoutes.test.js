const request = require('supertest');
const app = require('../../app');
const userService = require('../../services/userService');

jest.mock('../../services/userService', () => ({
  registerUser: jest.fn(),
  loginUser: jest.fn(),
}));

jest.mock('../../middleware/rateLimiter', () => ({
  registerLimiter: (req, res, next) => next(),
  loginLimiter: (req, res, next) => next(),
}));

jest.mock('../../config/database', () => ({
  query: jest.fn(),
  connect: jest.fn(),
}));

describe('User Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /users/register', () => {
    test('should return 201 with new user on success', async () => {
      const mockUser = { id: 1, email: 'test@test.com' };
      userService.registerUser.mockResolvedValue(mockUser);

      const res = await request(app)
        .post('/users/register')
        .send({ email: 'test@test.com', password: '123456' });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockUser);
    });

    test('should return 400 if email is missing', async () => {
      const res = await request(app).post('/users/register').send({ password: '123456' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Email is required');
    });

    test('should return 400 if password is too short', async () => {
      const res = await request(app)
        .post('/users/register')
        .send({ email: 'test@test.com', password: '123' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Password must be at least 6 characters');
    });

    test('should return 500 if service throws generic error', async () => {
      userService.registerUser.mockRejectedValue(new Error('DB error'));

      const res = await request(app)
        .post('/users/register')
        .send({ email: 'test@test.com', password: '123456' });

      expect(res.status).toBe(500);
    });
  });

  describe('POST /users/login', () => {
    test('should return 200 with token on success', async () => {
      const mockResult = {
        user: { id: 1, email: 'test@test.com' },
        token: 'mock.jwt.token',
      };
      userService.loginUser.mockResolvedValue(mockResult);

      const res = await request(app)
        .post('/users/login')
        .send({ email: 'test@test.com', password: '123456' });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockResult);
    });

    test('should return 400 if email format is invalid', async () => {
      const res = await request(app)
        .post('/users/login')
        .send({ email: 'not-an-email', password: '123456' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Email format is invalid');
    });
  });
});
