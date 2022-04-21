// input: name of species
// output: their generic sound
// ex: dog => bark, bird => tweet

const sound_if = function (speciesName) {
  if (speciesName === "dog") {
    return "woofwoof";
  } else if (speciesName === "cat") {
    return "meow";
  } else if (speciesName === "bird") {
    return " tweet";
  } else {
    return "unknown species";
  }
};

const sound_switch = function (speciesName) {
  let output = "TODO";
  switch (speciesName) {
    case "dog":
      output = "woofwoof";
      break;
    case "cat":
      output = "meow";
      break;
    case "bird":
      output = "tweet";
      break;
    default:
      output = "unknown species";
      break;
  }

  return output;
};
const result = sound_switch("dog");
console.log(result);
