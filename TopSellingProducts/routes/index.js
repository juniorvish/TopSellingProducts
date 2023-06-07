const express = require('express');
const router = express.Router();
const topSellingProductsController = require('../controllers/topSellingProductsController');

router.get('/top-selling-products/:days', topSellingProductsController.getTopSellingProducts);

module.exports = router;