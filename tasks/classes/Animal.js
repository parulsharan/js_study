class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("Animal walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs, featherColor) {
    super(legs);
    this.featherColor = featherColor;
  }

  fly() {
    console.log(`${this.featherColor} bird flying.`);
  }

  walk() {
    console.log(
      `Bird walking on ${this.legs} legs and it has feather of ${this.featherColor}`
    );
  }
}

class Woodpecker extends Bird {
  constructor(legs, featherColor) {
    super(legs, featherColor);
  }

  visionStrenght() {
    console.log("Woodpecker can see 0.4 mile.");
  }
}

class Eagle extends Bird {
  constructor(legs, featherColor) {
    super(legs, featherColor);
  }

  visionStrenght() {
    console.log("Eagle can see 5 mile.");
  }
}

// let bird = new Bird(2, "red");

// bird.walk();
// bird.fly();

let woodpecker = new Woodpecker(2, "Brown");
let eagle = new Eagle(2, "White");

woodpecker.visionStrenght();
eagle.visionStrenght();
woodpecker.fly();
eagle.fly();
