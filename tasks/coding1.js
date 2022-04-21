const BMI = (mass, height) => {
  return mass / height ** 2;
};

const johnmass = 95;
const johnheight = 1.95;
const markmass = 78;
const markheight = 1.69;

const Davi = {
  mass: 95,
  height: 1.95,
};

const jhonBMI = BMI(johnmass, johnheight);
const markBMI = BMI(markmass, markheight);

const davishBMI = BMI(Davi.mass, Davi.height);

console.log(`john ${jhonBMI}`);
console.log(`mark ${markBMI}`);

if (jhonBMI > markBMI) {
  console.log("John BMI is bigger");
} else {
  console.log("Mark BMI is bigger");
}
