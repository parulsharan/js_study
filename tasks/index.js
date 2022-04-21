// const { frequency, xxx } = require("./frequency");
const fibObj = require("./fibonacci");
const oddobj = require("./oddWaleFunctions");
// const result = fibObj.fib(8);
// console.log(result);

// const myFibCB = function (result) {
//   console.log(result);
// };

// fibObj.fibWithCB(3, myFibCB);
/*
const result = oddobj.odd(8);
console.log(result);

for (let index = 0; index < result.length; index++) {
  console.log(result[index] + 1);
}*/

//////// with named CB
const parulCB = function (err, data) {
  console.log(`data is being printed ${data}`);
  if (err) {
    console.error(`some error happened: ${err}`);
  } else {
    for (let index = 0; index < data.length; index++) {
      console.log(data[index] + 1);
    }
  }
};
oddobj.oddWithCB(8, parulCB);
console.log("running befor 3 sec.");

//////// with anonymus CB
/*oddobj.oddWithCB(8, (err, data) => {
  console.log(`data is being printed ${data}`);
  if (err) {
    console.error(`some error happened: ${err}`);
  } else {
    for (let index = 0; index < data.length; index++) {
      console.log(data[index] + 1);
    }
  }
});
*/
