/**
 * Given an array of N positive integers and an integer X. 
 * The task is to find the frequency of X in vector.


Example—> 
Input:

array = {1, 2, 3, 1, 1}
X = 1
Output: 
3
 */
const checkFreguency = (array, x) => {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (x == element) {
      count += 1;
    }
  }
  return count;
};
value = [1, 3, 2, 1, 1, 1];
result = checkFreguency(value, 8);
console.log(`the freguency is :${result}`);
