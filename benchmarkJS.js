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

// ex. 31 Get element by ID
let c = document.getElementById('continer')
// o let c = document.querySelector('#container')

// 32) Get every "td" from the page
let tds = document.getElementsByTagName('td')
// let tds = document.querySelectorAll('td')

// 33) Create a cycle that prints the text inside every td of the page
tds = document.querySelectorAll('td')
for(let x = 0; x<tds.lenght; x++) {
console.log(tds[x].innerText)
}

// 34) Write a function to change the heading of the page
let heading = document.querySelector('h1')
// let heading ? document.getElementByTagName('h1'[0])
heading.innerText = 'New Title'

// 35) write a function to add extra row to the table
const addRow = function() {
let newRow = document.createElement('tr') // <tr></tr>
for(let x=0; x<5; x++) {
let newCell = document.createElement('td') // <td></td>
newCell.innerText = x + 1 // <tr><td>1</td></tr>....</tr>
newRow.appendChild(newCell)
}
// the row has filled with 5 cells
// but it's not in the page yet
let table = document.querySelector('table')
table.appendChild(newRow)
}

// 36) write a function to add class "test" to each row in the table

const addTestClass = function() {
  let allTheRows = document.getElementsByTagName('tr')
  for(ket x = 0; x<allTheRaws; x++) {
    allTheRows[x].classList.add('test')
  }
}

// 37) write a function to add red background to every link in the page
const linkInRed = function() {
  let allTheLinks = document.ElementsByTagName('a')
for(let x=0; x<allTheLinks.lenght; x++){
  allTheLinks[x].style.backgroundColor = 'red';
}
}

// 38) console log "page loaded" when the page is correctly loaded
window.onload = function(){
  console.log("Page loaded")
}

// 39) write a funciton to add new items to a UL
comst addItemsToUl = function() {
  let mtUl = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.innerText = "this text wiòll be always the same"
  myUl.appwndChild(newLi)
}

// 40) write a function to empty a list
const emptyList = function() {
  let listToEmpty = document.querySelector('ul');
  listToEmpty.unnerHTML = '';
  // the result will be 
  //<ul>
  //</ul>
}