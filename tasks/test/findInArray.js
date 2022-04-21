const findNumber = function (array, n) {
  const middleIndex = Math.trunc(array.length / 2);
  const middleElement = array[middleIndex];
  console.log("middleIndex: ", middleIndex);
  console.log("middleElement: ", middleElement);
  if (n > middleElement) {
    // move to right
    console.log("move to right");
  } else {
    //   move to left
    console.log("Move to left.");
  }

  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     if (element === n) {
  //       return true;
  //     }
  //   }

  return false;
};

const numberArray = [11, 12, 13, 14, 15, 16];
const result = findNumber(numberArray, 16);
console.log(result);
