const taskService = require('../../services/taskService');
const taskModel = require('../../models/taskModel');

jest.mock('../../models/taskModel', () => ({
  getAllTasks: jest.fn(),
  getTaskById: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}));

describe('taskService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllTasks', () => {
    test('should calculate offset and call taskModel.getAllTasks', async () => {
      const mockTasks = [{ id: 1, title: 'Task 1' }];
      taskModel.getAllTasks.mockResolvedValue(mockTasks);

      const result = await taskService.getAllTasks(2, 5, true, 1);

      // page=2, limit=5 => offset=5
      expect(taskModel.getAllTasks).toHaveBeenCalledWith(5, 5, true, 1);
      expect(result).toEqual(mockTasks);
    });

    test('should pass undefined filters if not provided', async () => {
      taskModel.getAllTasks.mockResolvedValue([]);

      await taskService.getAllTasks(1, 10, undefined, undefined);

      expect(taskModel.getAllTasks).toHaveBeenCalledWith(10, 0, undefined, undefined);
    });
  });

  describe('getTaskById', () => {
    test('should return task from model', async () => {
      const mockTask = { id: 1, title: 'Task 1' };
      taskModel.getTaskById.mockResolvedValue(mockTask);

      const result = await taskService.getTaskById(1, 1);

      expect(taskModel.getTaskById).toHaveBeenCalledWith(1, 1);
      expect(result).toEqual(mockTask);
    });

    test('should return undefined if task not found', async () => {
      taskModel.getTaskById.mockResolvedValue(undefined);

      const result = await taskService.getTaskById(99, 1);

      expect(result).toBeUndefined();
    });
  });

  describe('createTask', () => {
    test('should call taskModel.createTask with title and userId', async () => {
      const mockTask = { id: 1, title: 'New task' };
      taskModel.createTask.mockResolvedValue(mockTask);

      const result = await taskService.createTask({ title: 'New task' }, 1);

      expect(taskModel.createTask).toHaveBeenCalledWith('New task', 1);
      expect(result).toEqual(mockTask);
    });
  });

  describe('updateTask', () => {
    test('should return updated task from model', async () => {
      const mockTask = { id: 1, title: 'Updated', completed: true };
      taskModel.updateTask.mockResolvedValue(mockTask);

      const result = await taskService.updateTask(1, { title: 'Updated', completed: true }, 1);

      expect(taskModel.updateTask).toHaveBeenCalledWith(
        1,
        { title: 'Updated', completed: true },
        1
      );
      expect(result).toEqual(mockTask);
    });

    test('should return null if model returns null', async () => {
      taskModel.updateTask.mockResolvedValue(null);

      const result = await taskService.updateTask(99, {}, 1);

      expect(result).toBeNull();
    });
  });

  describe('deleteTask', () => {
    test('should return deleted task from model', async () => {
      const mockTask = { id: 1, title: 'Task 1' };
      taskModel.deleteTask.mockResolvedValue(mockTask);

      const result = await taskService.deleteTask(1, 1);

      expect(taskModel.deleteTask).toHaveBeenCalledWith(1, 1);
      expect(result).toEqual(mockTask);
    });

    test('should return undefined if task not found', async () => {
      taskModel.deleteTask.mockResolvedValue(undefined);

      const result = await taskService.deleteTask(99, 1);

      expect(result).toBeUndefined();
    });
  });
});
