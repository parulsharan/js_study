class Calculatercl {
  constructor() {
    this.auditArray = [];
  }
  add(a, b) {
    const output = a + b;
    // this.deleteFromCacheIfRequired();
    this.cache("add", a, "+", b, output);
    return output;
  }
  sub(a, b) {
    const output = a - b;
    // this.deleteFromCacheIfRequired();
    this.cache("sub", a, "-", b, output);
    return output;
  }
  mul(a, b) {
    const output = a * b;
    // this.deleteFromCacheIfRequired();
    this.cache("mul", a, "*", b, output);
    return output;
  }
  div(a, b) {
    const output = a / b;
    // this.deleteFromCacheIfRequired();
    this.cache("div", a, "/", b, output);
    return output;
  }

  //   deleteFromCacheIfRequired() {
  //     if (this.auditArray.length > 2) {
  //       this.auditArray.shift();
  //     }
  //   }

  cache(name, a, symbol, b, output) {
    if (this.auditArray.length > 2) {
      this.auditArray.shift();
    }
    const message = `\n${name} of ${a} ${symbol} ${b} = ${output}.`;
    this.auditArray.push(message);
  }

  allResult() {
    return this.auditArray;
  }
}
let cal = new Calculatercl();
cal.add(1, 5);
cal.mul(2, 5);
cal.div(14, 7);
const res = cal.sub(12, 4);
console.log(`all results ${cal.allResult()}`);
// console.log(res);
