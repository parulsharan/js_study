let person = {
  namex: "",
  age: 1,
  print() {
    console.log(`Name : ${this.namex}, age: ${this.age}`);
  },
};

const parul = person;
parul.namex = "Parul Mann";
parul.age = 32;
parul.print();

const kamal = person;
kamal.namex = "kamal Mann";
kamal.age = 38;

kamal.print();
parul.print();
