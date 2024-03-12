function fib(n) {
    // Base cases: if n is 1 or 2, return 1 (first two numbers in the Fibonacci sequence)
    if (n === 1 || n === 2) {
        return 1;
    }
    // Recursive case: return the sum of the previous two Fibonacci numbers
    return fib(n - 1) + fib(n - 2);
}

// Example usage:

console.log(fib(6)); // Output: 8

