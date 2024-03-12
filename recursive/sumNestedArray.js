function sumArray(arr) {
    let sum = 0;
    // Base case: if the array is empty, return 0 (identity element for addition)
    if (arr.length === 0) {
        return 0;
    }
    
    // If the first element of the array is itself an array, recursively sum its elements
    if (Array.isArray(arr[0])) {
        return sum + sumArray(arr[0]) + sumArray(arr.slice(1));
    }
    
    // If the first element is not an array, add it to the sum and recursively sum the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}

// Example usage:
console.log(sumArray([1, 2, [3, 4], [5, 6]])); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6)
