const fibonacci = function (steps) {
  const stepsNum = Number(steps);
  if (stepsNum < 0) return "OOPS";
  if (stepsNum === 0) return 0;
  let result = 0,
    counter = 1;
  let firstNum = 0,
    secondNum = 1;

  do {
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
    counter++;
  } while (counter < stepsNum);
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
