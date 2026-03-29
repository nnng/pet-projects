const taskService = require('../services/taskService');
const asyncHandler = require('../middleware/asyncHandler');
const AppError = require('../utils/AppError');

// получение всех задач

const getTasks = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const completed =
    req.query.completed === 'true' ? true : req.query.completed === 'false' ? false : undefined;
  const userId = req.query.user_id ? parseInt(req.query.user_id) : undefined;

  const tasks = await taskService.getAllTasks(page, limit, completed, userId);

  res.json(tasks);
});

// получить одну задачу по id
const getTaskById = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.id;

  const task = await taskService.getTaskById(id, userId);

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  res.json(task);
});

// создание задачи
const createTask = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const newTask = await taskService.createTask(req.body, userId);

  res.status(201).json(newTask);
});

// удаление задачи
const deleteTask = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.id;

  const deletedTask = await taskService.deleteTask(id, userId);

  if (!deletedTask) {
    throw new AppError('Task not found', 404);
  }

  res.json({ message: 'Task deleted successfully' });
});

// обновление задачи
const updateTask = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);

  const userId = req.user.id;
  const updatedTask = await taskService.updateTask(id, req.body, userId);

  if (!updatedTask) {
    throw new AppError('Task not found', 404);
  }

  res.json(updatedTask);
});

// экспортируем функции
module.exports = {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
};
