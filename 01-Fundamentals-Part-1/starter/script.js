"use strict";

let js = "amazing";
if (js === "amazing") console.log("javascript is fun!");

const x = 23;
if (x === 3) {
  console.log("If part working: ", x + 10);
} else {
  console.log("else part working: ", x - 10);
}

let str = "";
for (let i = 0; i < 5; i++) {
  str = str + i + ", ";
  debugger;
}
console.log(str);
console.log("YAY! we have completed the processing.");
