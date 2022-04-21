const contains = function (findname, array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === findname) {
      return true;
    }
  }
  return false;
};

const input1 = ["Parul", "Kamal", "Kannan", "Davisha"];
const input2 = [];

const result = contains("Parul", input1);
console.log(`the result is ${result}`);
