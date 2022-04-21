const Person = require("./Person");

class BankAccount {
  totalMoney;
  personObj; // this has to be of type Person

  constructor(money, personObj) {
    this.totalMoney = money;
    this.personObj = personObj;
  }
  printReceipt() {
    console.log(`\n\nthis is your total money ${this.totalMoney}`);
    console.log(`${this.personObj.print()}`);
  }
  deposit(money) {
    this.totalMoney = this.totalMoney + money;
  }
  credit(money) {
    if (money < this.totalMoney) {
      this.totalMoney = this.totalMoney - money;
    } else {
      console.log(`\n$$$$$ #### insufficent money`);
    }
  }
}

////////////////////
const parulPerson = new Person("Parul", "Mann", 12312);
const paruAccount = new BankAccount(9999, parulPerson);
paruAccount.printReceipt();
// paruAccount.deposit(1);
// paruAccount.printReceipt();
// paruAccount.credit(199999);
// paruAccount.printReceipt();
