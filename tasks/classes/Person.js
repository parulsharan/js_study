class Person {
  fname;
  lname;
  address;
  ssn;

  constructor(firstName, lastName, address, ssn) {
    this.fname = firstName;
    this.lname = lastName;
    this.address = address;
    this.ssn = ssn;
  }

  print() {
    console.log(`Name: ${this.fname} ${this.lname}`);
    console.log(`Address: ${this.address}`);
    console.log(`SSN: VALID`);
  }
}

module.exports = Person;

//// Testing /////////////////////
// const parul = new Person("Parul", "Mann", "San Ramon", 1231212);
// console.log(parul.print());
