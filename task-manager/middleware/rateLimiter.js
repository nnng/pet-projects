const rateLimit = require('express-rate-limit');

// ============ ЛИМИТЕР ДЛЯ ЛОГИНА ============
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 5, // макс 5 запросов
  message: 'Too many login attempts, try again in 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});

// ============ ЛИМИТЕР ДЛЯ РЕГИСТРАЦИИ ============
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 час
  max: 3, // макс 3 запроса
  message: 'Too many registration attempts, try again in 1 hour',
  standardHeaders: true,
  legacyHeaders: false,
});

// ============ ОБЩИЙ ЛИМИТЕР ДЛЯ API ============
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 час
  max: 100, // макс 100 запросов
  message: 'Too many requests, try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  loginLimiter,
  registerLimiter,
  apiLimiter,
};
