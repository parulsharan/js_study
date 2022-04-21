/*const friends = {
  kamal: ["B", "A"],
  parul: ["AA", "BB"],
  run: function () {
    console.log("Hi there");
    return 11111;
  },
};

console.log(friends.parul);
console.log(friends["parul"]);
console.log(friends.run());
*/
// input = [1,2,3,2,3,6,6,6]
// output:
// 1:1
// 2:2
// 3:2
// 6:3

let dictionary = {};

const frequency = (input) => {
  for (let index = 0; index < input.length; index++) {
    const arrayValue = input[index];
    const dictionaryValue = dictionary[arrayValue];
    if (dictionaryValue) {
      dictionary[arrayValue] = dictionaryValue + 1;
    } else {
      dictionary[arrayValue] = 1;
    }
  }

  console.log(dictionary);
};
const xxx = () => {
  console.log("XXX is not implemented.");
};

// frequency([1, 3, 4, 1, 4, 3, 2]);

module.exports = { frequency, xxx };
