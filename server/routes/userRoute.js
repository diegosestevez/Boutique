const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const verifyToken = require('./../utils/verifyToken');

router
    .route('/')
    .get(verifyToken.protect, verifyToken.restrictToAdmin, userController.getAllUsers)
    // .get(userController.getAllUsers)

router.get('/stats', verifyToken.protect, verifyToken.restrictToAdmin, userController.getUserStats);

router
  .route('/:id')
  .get(verifyToken.protect, verifyToken.restrictToAdmin, userController.getUser)
  .patch(verifyToken.protect, verifyToken.restrictTo, userController.updateUser)
  .delete(verifyToken.protect, verifyToken.restrictTo, userController.deleteUser)



module.exports = router;
