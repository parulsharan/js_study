/*
 *
 **
 ***
 ****
 *****
 */
const printStar = function (n) {
  let starsToPrint = "";
  for (let i = 1; i <= n; i++) {
    starsToPrint = starsToPrint + "*";
    console.log(`${starsToPrint}`);
  }
};
printStar(5);
