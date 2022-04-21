// how to reverse an array
//input =[3,5,2,5,1,6]//
const reverseArray = (input) => {
  for (let i = input.length - 1; i >= 0; i--) {
    console.log(input[i]);
  }
};
reverseArray([3, 5, 1, 7, 2]);
