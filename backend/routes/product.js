const express = require('express');
const { allProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product');
const router = express.Router();

router.get('/', allProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct); // Added
router.delete('/:id', deleteProduct); // Added

module.exports = router;