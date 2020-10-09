let x = "John";
let y = "Doe";

function compareNames(name1, name2) {
  if (name1 === name2) {
    console.log(name1, "==", name2);
  } else {
    console.log(name1, "<>", name2);
  }
}
compareNames(x, y);

const myUser = {
  name: "nicola", // propertyname: value
  surname: "motricala",
  email: "motricala@gmail.com"
};

console.log(myUser);

delete myUser.email;

console.log(myUser);

let myArray = [
  "ciao",
  "mondo",
  "come",
  "va",
  "la",
  "tua",
  "giornata",
  "oggi",
  "bene",
  "male"
];
console.log(myArray);

let secondArray = [];

function getRandomNumbers() {
  return Math.floor(Math.random() * 1000) + 1;
}

for (let index = 0; index < 100; index++) {
  secondArray[index] = Math.floor(Math.random() * 1000) + 1;
}

console.log("SECOND ARRAY: ", secondArray, "DIM", secondArray.length);

function getMaxAndMin(array) {
  let resultMap = new Map();
  resultMap.set("minValue", Math.min.apply(Math, array));
  resultMap.set("maxValue", Math.max.apply(Math, array));
  return resultMap;
}

console.log(getMaxAndMin(secondArray));

let thirdArray = [];

for (let index = 0; index < 10; index++) {
  let temporary = [];
  for (let i = 0; i < 10; i++) {
    temporary[i] = getRandomNumbers();
  }
  thirdArray.push(temporary);
}

console.log("ARRAY OF ARRAYS", thirdArray);
