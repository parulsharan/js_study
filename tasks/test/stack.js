class Stackcl {
  constructor() {
    this.array = [];
  }
  push(element) {
    this.array.push(element);
  }
  top() {
    const length = this.array.length;
    return this.array[length - 1];
  }
  allElements() {
    return this.array;
  }
  sum() {
    let total = 0;
    for (let index = 0; index < this.array.length; index++) {
      const element = this.array[index];
      total += element;
    }
    return total;
  }
  pop() {
    return this.array.pop();
  }
  popAdvance(count) {
    let i = 0;
    while (i < count) {
      this.array.pop();
      i++;
    }

    // for (let index = 0; index < count; index++) {

    //   this.array.pop();
    // }
  }
}

let stack = new Stackcl();
stack.push(6);
stack.push(1);
stack.push(3);
const result = stack.top();
console.log(`this is the ${result}`);
const totalSum = stack.sum();
console.log(` the sum is : ${totalSum}`);
stack.pop();
const total = stack.allElements();
console.log(`these are all element in stack: ${total}`);
