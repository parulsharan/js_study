const removeDuplicateArray = (arr) => {
  newArr = [];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
};
const array = [1, 1, 2, 3, 3, 7];
const result = removeDuplicateArray(array);
console.log(`the result is:${result}`);
