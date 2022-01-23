const express = require('express');
const router = express.Router();
const cartController = require('./../controllers/cartController');
const verifyToken = require('./../utils/verifyToken');

router
.route('/')
.get(verifyToken.protect, verifyToken.restrictToAdmin, cartController.getAllCarts)
.post(verifyToken.protect, cartController.newCart)

router
.route('/:id')
.get(verifyToken.protect, verifyToken.restrictTo, cartController.getCart)
.patch(verifyToken.protect, verifyToken.restrictTo, cartController.updateCart)
.delete(verifyToken.protect, verifyToken.restrictTo, cartController.deleteCart)

module.exports = router;
