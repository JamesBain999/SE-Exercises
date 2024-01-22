const express = require('express');
const router = express.Router();

//Addition
router.get('/add', (req, res) => {
 let number1 = parseInt(req.query.num1);
 let number2 = parseInt(req.query.num2);
 let sum = number1 + number2
 console.log(sum)
 res.status(200)
 res.json({result:sum})
})

//Subtraction
router.get('/subtract', (req, res) => {
 let number1 = parseInt(req.query.num1);
 let number2 = parseInt(req.query.num2);
 let sum = number1 - number2
 console.log(sum)
 res.status(200)
 res.json({result:sum})
})

//Divide
router.get('/divide', (req, res) => {
 let number1 = parseInt(req.query.num1);
 let number2 = parseInt(req.query.num2);
 let sum = number1 / number2
 console.log(sum)
 res.status(200)
 res.json({result:sum})
})

//Multiply
router.get('/multiply', (req, res) => {
 let number1 = parseInt(req.query.num1);
 let number2 = parseInt(req.query.num2);
 let sum = number1 * number2
 console.log(sum)
 res.status(200)
 res.json({result:sum})
})

module.exports = router;