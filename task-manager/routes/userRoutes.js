const express = require('express');

const router = express.Router();

const { register, login } = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

router.post('/register', validateUser, register);
router.post('/login', validateUser, login);

module.exports = router;
