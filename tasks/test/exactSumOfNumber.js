const exactSum = (array, sum) => {
  const totalSum = 0;
  let currentTotal = 0;
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    currentTotal += element1;
    for (let j = 0; j < array.length; j++) {
      const element2 = array[j];
      currentTotal += element2;

      if (currentTotal > sum) {
        currentTotal = 0;
        break;
      } else if (currentTotal == sum) {
        return [i, j];
      }
    } // Second for loop with j
  } // First for loop with i

  return [-1, -1];
};
value = [1, 4, 20, 3, 10, 5];
sum = 35;
result = exactSum(value, sum);
console.log(`the output is :${result}`);
