class PersonCl {
  constructor(FirstName, birthYear) {
    this.FirstName = FirstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2040 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.FirstName}`);
  }
}
jessica = new PersonCl("jessica", 1990);
console.log(jessica);
jessica.calcAge();
jessica.greet();
console.log(jessica);
