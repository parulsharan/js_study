const intersectionArraySLOW = function (arr1, arr2) {
  let toReturn = [];

  for (let i = 0; i < arr1.length; i++) {
    const valueFrom1 = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      const valueFrom2 = arr2[j];

      if (valueFrom1 == valueFrom2) {
        if (toReturn.includes(valueFrom1)) {
          console.log(`Not adding ${valueFrom1} as it is already present`);
        } else {
          toReturn.push(valueFrom1);
        }
        /*if (!toReturn.includes(valueFrom1)) {
          toReturn.push(valueFrom1);
        }*/
      }
    }
  }
  return toReturn;
};
const intersectionArrayFAST = function (arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  arr1.sort(function (a, b) {
    return a - b;
  });
  arr2.sort(function (a, b) {
    return a - b;
  });
  //   console.log(arr1);
  //   console.log(arr2);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }

      i++;
      j++;
    }
  }
  return result;
};

const a = [3, 4, 6, 2, 3, 1];
const b = [10, 4, 2, 3, 3, 1];

// const result = intersectionArraySLOW(a, b);
const result = intersectionArrayFAST(a, b);
console.log(result);

// Time complexity: N*N
