const table = (n) => {
  for (let i = 1; i <= 10; i++) {
    const multi = n * i;
    console.log(`${multi}`);
  }
};
const number = table(2);
console.log(`table of :${number}`);
