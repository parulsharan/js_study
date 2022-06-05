// print a fibonacci
// [0, 1, 1, 2, 3, 5, 8]
const fib = function (n) {
  let firstNumber = 0;
  let secondNumber = 1;
  let currentNumber = 0;
  let output = [firstNumber, secondNumber];
  for (let index = 0; index < n; index++) {
    currentNumber = firstNumber + secondNumber;
    output.push(currentNumber);
    // console.log(currentNumber + "\n");

    firstNumber = secondNumber;
    secondNumber = currentNumber;
  }

  return output;
};
const value = 8;
const fibonacci = fib(value);
console.log(`the value of :${value}`);
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
