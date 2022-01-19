const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const verifyToken = require('./../utils/verifyToken');

router.patch('/:id', verifyToken.protect, verifyToken.restrictTo, userController.updateMe);

module.exports = router;
