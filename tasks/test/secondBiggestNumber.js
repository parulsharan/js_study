const secondNumber = (arr) => {
  const newArr = arr.sort(function (a, b) {
    return a - b;
  });
  const result = newArr[newArr.length - 2];
  return result;
};
const newArr = [1, 7, 8, 6, 2, 5];
const finalValue = secondNumber(newArr);
console.log(finalValue);
