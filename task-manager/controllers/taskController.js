const taskService = require('../services/taskService');

// получение всех задач
const getTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// получить одну задачу по id
const getTaskById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const task = await taskService.getTaskById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
};

// создание задачи
const createTask = async (req, res, next) => {
  try {
    const newTask = await taskService.createTask(req.body);

    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// удаление задачи
const deleteTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const deletedTask = await taskService.deleteTask(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// обновление задачи
const updateTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const updatedTask = await taskService.updateTask(id, req.body);

    if (!updatedTask) {
      const error = new Error('Task not found');
      error.statusCode = 404;
      throw error;
    }

    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

// экспортируем функции
module.exports = {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
};
