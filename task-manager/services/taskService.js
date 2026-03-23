const taskModel = require('../models/taskModel');

// получить все задачи
const getAllTasks = async (page, limit, completed, userId) => {
  const offset = (page - 1) * limit;

  return await taskModel.getAllTasks(limit, offset, completed, userId);
};

// получить одну задачу
const getTaskById = async (id, userId) => {
  return await taskModel.getTaskById(id, userId);
};

// создать задачу
const createTask = async (data, userId) => {
  return await taskModel.createTask(data.title, userId);
};

// обновить задачу
const updateTask = async (id, data, userId) => {
  return await taskModel.updateTask(id, data.title, data.completed, userId);
};

// удалить задачу
const deleteTask = async (id, userId) => {
  return await taskModel.deleteTask(id, userId);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
