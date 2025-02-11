function checkEvenOdd(number) {
    if (typeof number !== 'number') {
        return 'Error: Input must be a number';
    }
    
    if (number % 2 === 0) {
        return number + ' is an even number.';
    } else {
        return number + ' is an odd number.';
    }
}


console.log(checkEvenOdd(10)); 
console.log(checkEvenOdd(7)); 
console.log(checkEvenOdd(0)); 
console.log(checkEvenOdd(-5));
