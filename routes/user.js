const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//localhost:3000/api/user/register
router.post('/register', userController.register);

//localhost:3000/api/user/login
router.post('/login', userController.login);

module.exports = router;