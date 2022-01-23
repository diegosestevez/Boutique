const express = require('express');
const router = express.Router();
const orderController = require('./../controllers/orderController');
const verifyToken = require('./../utils/verifyToken');

router.get('/income', verifyToken.protect, verifyToken.restrictToAdmin, orderController.income)

router
.route('/')
.get(verifyToken.protect, verifyToken.restrictToAdmin, orderController.getAllOrders)
.post(verifyToken.protect, orderController.newOrder);

router
.route('/:id')
.get(verifyToken.protect, verifyToken.restrictTo, orderController.getOrder)
.patch(verifyToken.protect, verifyToken.restrictToAdmin, orderController.updateOrder)
.delete(verifyToken.protect, verifyToken.restrictToAdmin, orderController.deleteOrder)

module.exports = router;
