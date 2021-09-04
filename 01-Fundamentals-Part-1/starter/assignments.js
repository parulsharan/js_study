/*
let country = "India";
let continent = "asia";
let population = "1.4b";
// console.log(country);
console.log("country: " + country);
console.log("continent: " + continent);
console.log("population: " + population);







let markmass = 78;
let joanmass = 92;
let markheight = 1.69;
let joanheight = 1.88;

let joanbmi = joanmass / joanheight ** 2;
let markbmi = markmass / (markheight * markheight);
let markHigherbmi = markbmi > joanbmi;

console.log(joanbmi, markbmi, markHigherbmi);

if (markbmi > joanbmi) {
    console.log(`mark's bmi(${markbmi})is higher than joan's(${joanbmi})`)
}
else {
    console.log(`joan's bmi(${joanbmi}) is higher than mark's(${markbmi})`)
}





// camparesion///
const dolphinscore = (96 + 108 + 89) / 3;
const koalsscore = (88 + 91 + 110) / 3;
console.log("dolphinscore  koalsscore");

if (dolphinscore > koalsscore) {
    console.log("dolphins is the winner")
} else if (dolphinscore < koalsscore) {
    console.log("koals is the winner")
} else if (dolphinscore === koalsscore) {
    console.log("match draw")
}


//operator////
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill},the tip was${tip},and the total value${bill + tip}`);




////function///
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
let scoredolphins = calcAverage(44, 23, 71);
let scorekoalas = calcAverage(65, 54, 49);
console.log(scoredolphins, scorekoalas);

const checkwinner = function (avgdolphins, avgkoalas) {
    if (avgdolphins >= 2 * koalsscore) {
        console.log(`dolphins is the winner(${avgdolphins} vs.${avgkoalas})`);
    } else if (avgkoalas >= 2 * dolphinscore) {
        console.log(`koalas is the winner(${avgdolphins} vs.${avgkoalas})`);
    } else {
        console.log('no team win....');
    }

}
checkwinner(scorekoalas, scoredolphins);
checkwinner(478, 647);
scorekoalas = (76, 59, 34);
scoredolphins = (45, 89, 56);
console.log(scoredolphins, scorekoalas);
checkwinner(scorekoalas, scoredolphins);

////aarrey///
const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);

////objects////
const joans = {
    firstName: 'joans',
    lastName: 'schecdmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['micheal', 'peter', 'steven',],
    driverLincense: 'true',
    clacAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.clacAge()}-year old ${joans.job} and he has
        ${this.driverLincense ? 'a' : 'no'} driver's lincese.`
    }
};
console.log(joans.clacAge());
console.log(joans.age);
console.log(joans.getSummary());

///codind#3///
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    clacBmi: function () {
        this.Bmi = this.mass / this.height ** 2;
        return this.Bmi;
    }

};
const joan = {
    fullName: 'Joan Smith',
    mass: 78,
    height: 1.92,
    clacBmi: function () {
        this.Bmi = this.mass / this.height ** 2;
        return this.Bmi;
    }
};
mark.clacBmi();
joan.clacBmi();
console.log(mark.Bmi, joan.Bmi);

if (mark.Bmi > joan.bmi) {
    console.log(`${mark.fullName}'s Bmi(${mark.Bmi}) is higher than ${joan.fullNmae}'s Bmi(${joan.Bmi})`)
}
*/
//loop,function//
const clacTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i <= bills.lenght; i++) {
  const tip = clacTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const clacAgerage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.lenght; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
