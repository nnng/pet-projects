const express = require('express');

// создаем router
const router = express.Router();

// импортируем controller
const {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
} = require('../controllers/taskController');

// endpoint: GET /tasks
router.get('/tasks', getTasks);

// создать задачу
router.post('/tasks', createTask);

// получить одну задачу
router.get('/tasks/:id', getTaskById);

// удалить задачу
router.delete('/tasks/:id', deleteTask);

// обновить задачу
router.put('/tasks/:id', updateTask);

// экспортируем router
module.exports = router;
