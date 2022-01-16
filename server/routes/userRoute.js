const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.get('/usertest', userController.test);

module.exports = router;
