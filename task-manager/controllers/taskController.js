const taskService = require('../services/taskService');
const asyncHandler = require('../middleware/asyncHandler');

// получение всех задач

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getAllTasks();

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
