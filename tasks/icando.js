//function which take integer and print i can do javascript equal to interger//
const iCanDoWithForAscending = function (n) {
  for (let i = 0; i < n; i++) {
    console.log(`i can do javascript. For: ${i}`);
  }
};

// iCanDoWithForAscending(5);

const iCanDoWithWhileAscending = function (n) {
  let i = 0;
  while (i < n) {
    console.log(`i can do javascript. While: ${i}`);
    i++;
  }
};

// iCanDoWithWhileAscending(5);

const iCanDoWithForDescending = function (n) {
  for (let i = n; i > 0; i--) {
    console.log(`i can do javascript. For: ${i}`);
  }
};
// iCanDoWithForDescending(5);//

const iCanDoWithWhiledescending = function (n) {
  let i = n;
  while (i > 0) {
    console.log(`i can do javascript. While: ${i}`);
    i--;
  }
};
iCanDoWithWhiledescending(5);
