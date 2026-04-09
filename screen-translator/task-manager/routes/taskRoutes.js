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

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Получить все задачи текущего пользователя
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Номер страницы
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Количество задач на странице
 *       - in: query
 *         name: completed
 *         schema:
 *           type: boolean
 *         description: Фильтр по статусу (true/false)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Список задач
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       401:
 *         description: Не авторизован
 */
router.get('/', getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Получить задачу по id
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID задачи
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Задача найдена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       401:
 *         description: Не авторизован
 *       404:
 *         description: Задача не найдена
 */
router.get('/:id', getTaskById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Создать новую задачу
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Buy milk
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Задача создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Ошибка валидации
 *       401:
 *         description: Не авторизован
 */
router.post('/', validateTask, createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Обновить задачу
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID задачи
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Buy milk updated
 *               completed:
 *                 type: boolean
 *                 example: true
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Задача обновлена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Ошибка валидации
 *       401:
 *         description: Не авторизован
 *       404:
 *         description: Задача не найдена
 */
router.put('/:id', validateTask, updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Удалить задачу
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID задачи
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Задача удалена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Task deleted successfully
 *       401:
 *         description: Не авторизован
 *       404:
 *         description: Задача не найдена
 */
router.delete('/:id', deleteTask);

module.exports = router;
