const integerFn = (num) => {
  let newNum = Array.from(String(num));
  let output = [];
  console.log(newNum);
  for (let i = 0; i < newNum.length; i++) {
    const element = newNum[i];

    const newValue = element * element;
    output.push(newValue);
    console.log(newValue);
  }
  return output;
};
const integer = 12345;
const res = integerFn(integer);
console.log(`the value is :${res}`);
