const express = require('express');

const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');
const { registerLimiter, loginLimiter } = require('../middleware/rateLimiter');

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Регистрация нового пользователя
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Пользователь успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 email:
 *                   type: string
 *       400:
 *         description: Ошибка валидации
 *       429:
 *         description: Слишком много попыток регистрации
 */
router.post('/register', registerLimiter, validateUser, registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Вход пользователя
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Успешный вход
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 id:
 *                   type: number
 *                 email:
 *                   type: string
 *       401:
 *         description: Неверный email или пароль
 *       429:
 *         description: Слишком много попыток входа
 */
router.post('/login', loginLimiter, validateUser, loginUser);

module.exports = router;
