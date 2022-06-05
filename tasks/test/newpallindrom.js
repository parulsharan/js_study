const pallindrom = function (string) {
  const strArr = string.split("");
  let firstIndex = 0;
  let lastIndex = strArr.length - 1;
  while (firstIndex < strArr.length / 2) {
    console.log(`${strArr[firstIndex]} === ${strArr[lastIndex]}`);
    if (strArr[firstIndex] === strArr[lastIndex]) {
      firstIndex++;
      lastIndex--;
    } else {
      return false;
    }
  }

  return true;
};
const word = "kkkkl";
const result = pallindrom(word);
console.log(`the res is ${result}`);
