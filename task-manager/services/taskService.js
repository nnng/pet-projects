const taskModel = require('../models/taskModel');

// получить все задачи
const getAllTasks = async () => {
  return await taskModel.getAllTasks();
};

// получить одну задачу
const getTaskById = async (id) => {
  return await taskModel.getTaskById(id);
};

// создать задачу
const createTask = async (data) => {
  return await taskModel.createTask(data.title);
};

// обновить задачу
const updateTask = async (id, data) => {
  return await taskModel.updateTask(id, data.title, data.completed);
};

// удалить задачу
const deleteTask = async (id) => {
  return await taskModel.deleteTask(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
