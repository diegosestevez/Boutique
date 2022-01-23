const express = require(express);
const router = express.Router();
const stripeController = require('./../routes/stripeController');

router.post('/payment', stripeController.payment);

module.exports = router;
