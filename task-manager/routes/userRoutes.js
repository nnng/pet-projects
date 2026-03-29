const express = require('express');

const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

router.post('/register', validateUser, registerUser);
router.post('/login', validateUser, loginUser);

module.exports = router;
