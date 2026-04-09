const errorHandler = require('../../middleware/errorHandler');
const AppError = require('../../utils/AppError');

describe('errorHandler middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  test('should return statusCode and message for AppError', () => {
    const err = new AppError('Task not found', 404);

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      statusCode: 404,
      message: 'Task not found',
    });
  });

  test('should return 500 for generic Error', () => {
    const err = new Error('Something broke');

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      statusCode: 500,
      message: 'Internal Server Error',
    });
  });
});
