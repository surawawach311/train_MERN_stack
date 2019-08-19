const express = require('express');
const router = express.Router();
const settingControllers = require('../controllers/settingController');

router.get('/', settingControllers.index);

module.exports = router;