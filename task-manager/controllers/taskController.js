const taskService = require('../services/taskService');

// получения всех задач
const getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();

  res.json(tasks);
};

// получить одну задачу по id
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

//создание задачи
const createTask = (req, res) => {
  const { title } = req.body;

  const newTask = taskService.createTask(title);

  res.status(201).json(newTask);
};

// удаление задачи
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const deletedTask = taskService.deleteTask(id);

  if (!deletedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = taskService.updateTask(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(updatedTask);
};

// экспортируем функцию
module.exports = {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
};
