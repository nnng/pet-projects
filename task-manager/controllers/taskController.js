const taskService = require('../services/taskService');
const asyncHandler = require('../middleware/asyncHandler');

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

  const task = await taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
});

// создание задачи
const createTask = asyncHandler(async (req, res) => {
  const newTask = await taskService.createTask(req.body);

  res.status(201).json(newTask);
  console.log(req.body);
});

// удаление задачи
const deleteTask = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);

  const deletedTask = await taskService.deleteTask(id);

  if (!deletedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
});

// обновление задачи
const updateTask = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);

  const updatedTask = await taskService.updateTask(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Task not found' });
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
