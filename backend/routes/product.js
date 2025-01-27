const express = require('express');
const { allProducts, createProduct } = require('../controllers/product');
const router = express.Router();

router.get('/', allProducts);
router.post('/', createProduct);

module.exports = router;