const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, num) => sum += num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, num) => product *= num, 1); 
};

const power = function(base, exponent) {
  let result = base;
	for(i = 1; i < exponent; i++){
    result *= base;
  }
  console.log(result);
  return result;
};

const factorial = function(num) {
  let result = 1;
	for(i = 1; i <= num; i++){
    result *= i;
  }
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
