const express = require('express');
const router = express.Router();
const productController = require('./../controllers/productController');
const verifyToken = require('./../utils/verifyToken');

router
  .route('/')
  .get(productController.getAllProducts)
  .post(verifyToken.protect, verifyToken.restrictToAdmin, productController.newProduct)

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(verifyToken.protect, verifyToken.restrictToAdmin, productController.updateProduct)
  .delete(verifyToken.protect, verifyToken.restrictToAdmin, productController.deleteProduct)

  module.exports = router;
