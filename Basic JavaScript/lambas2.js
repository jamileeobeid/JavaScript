// --------- LAMBDA ---------
$(document).ready();

// --------- example 1 ---------
const multiply = (a, b) => a * b;
let a = 3;
let b = 4;
console.log(multiply(a, b));

// --------- example 2 ---------
const cube = num => num * num * num;
let value = 3;
console.log(cube(value));

// --------- example 3 --------- 
const values = [10, 15, 20, 25, 30, 35];
const greaterThan20 = values.filter(num => num > 20);
console.log(greaterThan20);

// --------- example 4 --------- 
const isOdd = num => num % 2 !== 0;
console.log(isOdd(9));
console.log(isOdd(12));
