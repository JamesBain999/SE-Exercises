const ecommerceController = require("../controllers/ecommerceController");
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Define routes
router.get('/products', async (req, res) => {
    ecommerceController.getProducts(req,res);
});

module.exports = router;