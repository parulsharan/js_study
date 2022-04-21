const Person = function (firstName, birthYear) {
  this.name = firstName;
  this.year = birthYear;
};
Person.prototype.calcAge = function () {
  const calc = 2037 - this.year;
  console.log(`${this.name} : ${calc}`);
};

Person.prototype.changeHairColor = function (color) {
  this.hariColor = color;
  console.log(`${this.name} : ${this.hariColor}`);
};

// When we call a funciton with `new` keyword, it outputs an object which you can save to a variable.
const parul = new Person("Parul", 1989);
const kamal = new Person("Kamal", 1983);
parul.changeHairColor("red");
// console.log(parul);
// console.log(kamal);

// kamal.calcAge();
// parul.calcAge();
// //////////////

const cars = new Array("Saab", "Volvo", "BMW");
Array.prototype.print = function (input) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    //console.log(`${element}: ${input}`);
  }
};

cars.print("AWD");

const House = function (rooms) {
  // this = {};
  this.rooms = rooms;
  //console.log(rooms);
  // return this;
};

const sanRamonHouse = new House(4);
///////
//////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 90);

///call constructer//
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.accelerate();
/////
/////
////classes//////
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonCL("jessica", 1992);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCL.prototype);
////
////////
////
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
const ford = new CarCl("ford", 120);
console.log(ford.speedUS);
//////
///////coding 3//
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};
//link the prototype//
EV.prototype = Object.create(car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}`
  );
};

const Tesla = new EV("Tesla", 120, 23);
Tesla.chargeBattery(90);
console.log(Tesla);
Tesla.brake();
