const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.get('/usertest', userController.test);
router.post('/usertest', userController.testPost);

module.exports = router;
