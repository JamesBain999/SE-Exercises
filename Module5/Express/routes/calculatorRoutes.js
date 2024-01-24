const express = require('express');
const router = express.Router();
const calcController = require('../controllers/calculatorController')


//Addition
router.get('/add', (req, res) => {
    calcController.addNumbers(req,res)
})

//Subtraction
router.get('/subtract', (req, res) => {
    calcController.subtractNumbers(req,res)
})

//Divide
router.get('/divide', (req, res) => {
    calcController.divideNumbers(req,res)
})

//Multiply
router.get('/multiply', (req, res) => {
    calcController.multiplyNumbers(req,res)
})

module.exports = router;