const reverseArray = function (array) {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
  }
};
const array = [1, 4, 6, 4, 8];

reverseArray(array);
