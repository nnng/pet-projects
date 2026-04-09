const asyncHandler = require('../../middleware/asyncHandler');

describe('asyncHandler middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {};
    next = jest.fn();
  });

  test('should call the wrapped function with req, res, next', async () => {
    const fn = jest.fn().mockResolvedValue();

    await asyncHandler(fn)(req, res, next);

    expect(fn).toHaveBeenCalledWith(req, res, next);
  });

  test('should call next() with error if wrapped function throws', async () => {
    const mockError = new Error('Async error');
    const fn = jest.fn().mockRejectedValue(mockError);

    await asyncHandler(fn)(req, res, next);

    expect(next).toHaveBeenCalledWith(mockError);
  });

  test('should not call next() with error if wrapped function resolves', async () => {
    const fn = jest.fn().mockResolvedValue();

    await asyncHandler(fn)(req, res, next);

    expect(next).not.toHaveBeenCalledWith(expect.any(Error));
  });
});
