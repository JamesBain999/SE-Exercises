const axios = require('axios');

const ecommerceController = {
    getProducts: async (req, res) => {
        try {
            const response = await axios.get('https://fakestoreapiserver.reactbd.com/products');
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            res.status(400).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = ecommerceController;

