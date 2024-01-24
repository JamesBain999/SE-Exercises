const Calculator = require("../libraries/calculator");

//Addition
const addNumbers = (req, res) => {
  const calc = new Calculator();
  sum = calc.add(parseInt(req.query.num1), parseInt(req.query.num2));
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

//Subtraction
const subtractNumbers = (req, res) => {
  const calc = new Calculator();
  sum = calc.subtract(parseInt(req.query.num1), parseInt(req.query.num2));
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

//Divide
const divideNumbers = (req, res) => {
  const calc = new Calculator();
  sum = calc.divide(parseInt(req.query.num1), parseInt(req.query.num2));
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

//Multiply
const multiplyNumbers = (req, res) => {
  const calc = new Calculator();
  sum = calc.multiply(parseInt(req.query.num1), parseInt(req.query.num2));
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
