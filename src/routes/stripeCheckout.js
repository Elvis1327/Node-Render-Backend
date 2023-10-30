const { Router } = require('express');
const { processStripePayment } = require('../controllers/stripeController');

const router = Router();

// Routes
router.post('/checkout', processStripePayment);



module.exports = router;


