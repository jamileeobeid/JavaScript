// POWER
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// FACTORIAL
function factorial(n) {
    if (n < 0) return 'Error: Negative number';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

//GREATEST COMMON DIVISOR
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// PRIME NUMBERS
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


console.log("Power: " + power(2, 3));
console.log("Factorial: " + factorial(5));
console.log("GCD: " + gcd(48, 18));
console.log("Is Prime: " + isPrime(11));
