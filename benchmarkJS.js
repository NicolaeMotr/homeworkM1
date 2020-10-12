let x = "John";
let y = "Doe";

const print = function{
  let x = "John"
  let y = "Doe"
  console.log(x + ' <>' + y)
}

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

// a lezione:
const createArray = function() {
  let arrayLezione = []
  for(let x=0; x<10; x++) {
    array.push('element n' + x)
  }
  console.log(arrayLezione)
}

let secondArray = [];

//

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


// ex. 29

const longestArray = function(arr1, arr2) {
  return arr1.lenght > arr2.lenght? arr1 : arr2;
}

// ex. 30

const higherValueArray = function(arr1, arr2) {
  let sum1 = 0
  let sum2 = 0
  for(let x=0; x<arr1.lenght; x++) {
    sum1 = sum1 + arr1[x]
    // versione più corta sum1 += arr1[x]
  }
  for(let y=0; y<arr2.lenght; y++) {
    sum2= sum2 + arr2[y]
    // sum2 += arr2[y]
  }
  // sum1 and sum2 are the actual sum of the values
  return sum1 > sum2 ? sum1 : sum2 
}