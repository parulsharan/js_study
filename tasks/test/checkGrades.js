// out of 100 how much kid got the marks will be input to the function.
// A+ marks > 95
// A marks > 85-94
// B marks > 75
// C makrs > 50
// D less than 50

const grades = function (marks) {
  const type = typeof marks;
  //   if (type != "number" || marks > 100) {
  //     return "Invalid entry";
  //   }

  if (type === "number" && marks <= 100) {
    if (marks >= 95) {
      return "A+";
    } else if (marks > 85 && marks < 95) {
      return "A";
    } else if (marks > 75 && marks < 85) {
      return "B";
    } else if (marks > 50 && marks < 75) {
      return "C";
    } else {
      return "D";
    }
  } else {
    return "invalid input";
  }
};

const result = grades("x70");
console.log(result);

const htmlElement = {
  type: "text",
  id: "idInput",
  value: "kamal",
};

htmlElement.type;
