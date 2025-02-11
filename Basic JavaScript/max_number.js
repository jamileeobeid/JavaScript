function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Error: Input must be a non-empty array';
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


let numbers = [3, 7, 2, 9, 5, 8];
console.log("Maximum number: " + findMax(numbers));
