const checkFreqency = function (array) {
  let freqency = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    if (freqency[key] == null) {
      // if not present already
      freqency[key] = 1;
    } else {
      // if it is already there, increment by 1
      freqency[key] = freqency[key] + 1;
    }
  }
  return freqency;
};

const input = ["B", "B", "A", "C", "A", "E", "A"];
const result = checkFreqency(input);
console.log(result);
console.log(result["A"]);
/*
const xxx = {
  name: "Kamal",
  age: 21,
};

console.log(xxx.name);
*/

const fascade = function () {
  dataFromAPI().fromatting().displayOnScreen();
};
fascade();

pipe(dataFromAPI, fromatting, displayOnScreen);

pipe();
