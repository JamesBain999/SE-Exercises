const Logger = require("./logger");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class Calculator {
  constructor() {
    this.id = getRandomInt(1, 100000000000000000);
    this.logger = new Logger();
  }

    #log = (value) => {
        this.logger.logMessage(this.id, value);
    };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }
}

module.exports = Calculator;

// const logger = new Logger();
// const calculator = new Calculator(logger);

// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(10, 4));
// console.log(calculator.divide(8, 2));
// console.log(calculator.multiply(6, 7));
