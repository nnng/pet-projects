const express = require('express');

const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');
const { registerLimiter, loginLimiter } = require('../middleware/rateLimiter');

router.post('/register', registerLimiter, validateUser, registerUser);
router.post('/login', loginLimiter, validateUser, loginUser);

module.exports = router;
