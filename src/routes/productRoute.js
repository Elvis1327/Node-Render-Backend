const { Router } = require('express');
const { createProduct, getAllProducts } = require('../controllers/productController');

// Router
const router = Router();

// Create one Product
router.post('/create-product', createProduct);
// Get All Product
router.get('/get-products', getAllProducts);

module.exports = router;

