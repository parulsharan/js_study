const Fn = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

const value = 20;
const result = Fn(value);
console.log(`the sum is :${result}`);
