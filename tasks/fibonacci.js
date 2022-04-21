// print a fibonacci
// [0, 1, 1, 2, 3, 5, 8]
const fib = function (n) {
  let firstNumber = 0;
  let secondNumber = 1;
  let currentNumber = 0;
  let finalResult = [firstNumber, secondNumber];
  for (let index = 0; index < n; index++) {
    currentNumber = firstNumber + secondNumber;
    finalResult.push(currentNumber);
    // console.log(currentNumber + "\n");

    firstNumber = secondNumber;
    secondNumber = currentNumber;
  }

  return finalResult;
};

// const fibWithCB = function (n, callback) {
//   let firstNumber = 0;
//   let secondNumber = 1;
//   let currentNumber = 0;
//   let finalResult = [firstNumber, secondNumber];
//   for (let index = 0; index < n; index++) {
//     currentNumber = firstNumber + secondNumber;
//     finalResult.push(currentNumber);
//     // console.log(currentNumber + "\n");

//     firstNumber = secondNumber;
//     secondNumber = currentNumber;
//   }

//   callback(finalResult);
// };

module.exports = { fib };
