class Person {
  // # private vaiables start with #
  #name;
  #age;

  init(name, age) {
    this.#name = name;
    this.#age = age;
  }

  print() {
    console.log(`NAme: ${this.#name}, age: ${this.#age}`);
  }
}

const parul = new Person();
parul.init("Parul Mann", 32);
parul.print();

const kamal = new Person();
kamal.init("kamal Mann", 38);
kamal.print();

parul.print();
