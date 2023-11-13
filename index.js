// VARIABLES - container for data to be used for later

// let - are mutable / change

let number = 15

number = 10

console.log(number)

// const - immutable / cannot change

const name1 = 'Chinue'

// name1 = 'Collin'

// var

var number2 = 0

number2 = 10

// DATA TYPES

// Number/Integer

let x = 2

let y = 2.5

let z = x + y

let b = 1000000

console.log(2**4)

// String - sequence of characters

// '', "", ``

const name2 = `Good1`

// concatenation
let sentence = 'hi'
let sentence2 = 'bye'
let sentence3 = sentence + ' ' + sentence2
let sentence4 = `Hi my name is Chinue ${sentence2}`

let o = 200

let s = `${0}`

let num = '20,000'

let num2 = 20

console.log(num + num2)

const num3 = 10

console.log(num3)

// Booleans

// Truthy - anything with value
// 1
// 'Great'
// true


// Falsy - undefined; no value
// 0
// ''
// false
// undefined
// null

console.log(Boolean(""))

//what is an array?

const emptyArr = [];
console.log(emptyArr);
const lengthOfEmptyArray = emptyArr.length;
console.log(lengthOfEmptyArray);

const mixArr = [1, "Chinue"];
console.log(mixArr);

const name = "Chinue";

const nameArr = ["Chang", "Chinue","Myself"];
console.log(nameArr);
const lengthOfNameArr = nameArr.length;
console.log(lengthOfNameArr)

const hello = `Hi my name is ${nameArr[1]}.`;
console.log(hello);

console.log(nameArr[1]);

nameArr.push("Lucycan");
nameArr.push("Cortez");
console.log(nameArr);

console.log(nameArr.pop()m