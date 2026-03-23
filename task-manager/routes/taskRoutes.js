const express = require('express');

const router = express.Router();

const {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
} = require('../controllers/taskController');

const validateTask = require('../middleware/validateTask');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', validateTask, createTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
