const taskController = require('../../controllers/taskController');
const taskService = require('../../services/taskService');
const AppError = require('../../utils/AppError');

jest.mock('../../services/taskService', () => ({
  getAllTasks: jest.fn(),
  getTaskById: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}));

describe('taskController', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {}, params: {}, query: {}, user: { id: 1 } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  describe('getTasks', () => {
    test('should return tasks with default pagination', async () => {
      const mockTasks = [{ id: 1, title: 'Task 1' }];
      taskService.getAllTasks.mockResolvedValue(mockTasks);

      await taskController.getTasks(req, res, next);

      expect(taskService.getAllTasks).toHaveBeenCalledWith(1, 10, undefined, undefined);
      expect(res.json).toHaveBeenCalledWith(mockTasks);
    });

    test('should pass parsed query params to service', async () => {
      req.query = { page: '2', limit: '5', completed: 'true', user_id: '3' };
      const mockTasks = [];
      taskService.getAllTasks.mockResolvedValue(mockTasks);

      await taskController.getTasks(req, res, next);

      expect(taskService.getAllTasks).toHaveBeenCalledWith(2, 5, true, 3);
    });

    test('should call next() with error if service throws', async () => {
      taskService.getAllTasks.mockRejectedValue(new Error('DB error'));

      await taskController.getTasks(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('getTaskById', () => {
    test('should return task if found', async () => {
      req.params.id = '1';
      const mockTask = { id: 1, title: 'Task 1' };
      taskService.getTaskById.mockResolvedValue(mockTask);

      await taskController.getTaskById(req, res, next);

      expect(taskService.getTaskById).toHaveBeenCalledWith(1, 1);
      expect(res.json).toHaveBeenCalledWith(mockTask);
    });

    test('should call next() with AppError 404 if task not found', async () => {
      req.params.id = '99';
      taskService.getTaskById.mockResolvedValue(null);

      await taskController.getTaskById(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(AppError));
      expect(next.mock.calls[0][0].statusCode).toBe(404);
    });
  });

  describe('createTask', () => {
    test('should return 201 with created task', async () => {
      req.body = { title: 'New task' };
      const mockTask = { id: 1, title: 'New task' };
      taskService.createTask.mockResolvedValue(mockTask);

      await taskController.createTask(req, res, next);

      expect(taskService.createTask).toHaveBeenCalledWith({ title: 'New task' }, 1);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockTask);
    });

    test('should call next() with error if service throws', async () => {
      taskService.createTask.mockRejectedValue(new Error('DB error'));

      await taskController.createTask(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('deleteTask', () => {
    test('should return success message if task deleted', async () => {
      req.params.id = '1';
      taskService.deleteTask.mockResolvedValue({ id: 1 });

      await taskController.deleteTask(req, res, next);

      expect(taskService.deleteTask).toHaveBeenCalledWith(1, 1);
      expect(res.json).toHaveBeenCalledWith({ message: 'Task deleted successfully' });
    });

    test('should call next() with AppError 404 if task not found', async () => {
      req.params.id = '99';
      taskService.deleteTask.mockResolvedValue(null);

      await taskController.deleteTask(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(AppError));
      expect(next.mock.calls[0][0].statusCode).toBe(404);
    });
  });

  describe('updateTask', () => {
    test('should return updated task', async () => {
      req.params.id = '1';
      req.body = { title: 'Updated task' };
      const mockTask = { id: 1, title: 'Updated task' };
      taskService.updateTask.mockResolvedValue(mockTask);

      await taskController.updateTask(req, res, next);

      expect(taskService.updateTask).toHaveBeenCalledWith(1, { title: 'Updated task' }, 1);
      expect(res.json).toHaveBeenCalledWith(mockTask);
    });

    test('should call next() with AppError 404 if task not found', async () => {
      req.params.id = '99';
      taskService.updateTask.mockResolvedValue(null);

      await taskController.updateTask(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(AppError));
      expect(next.mock.calls[0][0].statusCode).toBe(404);
    });
  });
});
