const pallindrom = function (array) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  // for (let index = 0; index < array.length / 2; index++) {
  while (firstIndex < array.length / 2) {
    if (array[firstIndex] === array[lastIndex]) {
      firstIndex++;
      lastIndex--;
    } else {
      return false;
    }
  }

  return true;
};
const word = ["m", "a", "d", "a", "m"];
const result = pallindrom(word);
console.log(result);
