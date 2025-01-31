// --------- LAMBDA ---------
$(document).ready();

// --------- example 1 ---------
const add = (x, y) => x+y;
let x = 2;
let y = 5;
console.log(add(x,y));

// --------- example 2 ---------
const square = num => num * num;
let num = 6;
console.log(square(num));

// --------- example 3 --------- 
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// --------- example 4 --------- 
const isEven = num => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));
