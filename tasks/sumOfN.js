// print sum of n numbers
const print = function (input) {
  let sum = 0;
  for (let i = 0; i < input; i++) {
    sum += i;
  }
  return sum;
};
const add = print(5);
console.log(`addition is ${add}`);
