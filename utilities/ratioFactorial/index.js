const factorialOffNumber = require("../factorial/index");
const ratioOffTwoNumbers = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOffTwoNumbers(num1, num2);
  const factorial = factorialOffNumber(num3);
  return { factorial, ratio };
};

module.exports = ratioAndFactorial;
