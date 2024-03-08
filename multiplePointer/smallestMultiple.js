function smallestMultiple(n) {
    // Find the least common multiple of 2 and n
    // Since 2 is a factor of any multiple of 2, we just need to find the LCM of 2 and n
    let lcm = (2 * n) / gcd(2, n);
    return lcm;
}

// Function to find the greatest common divisor (GCD) using Euclid's algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
const n = 6; // Example value of n
console.log(smallestMultiple(n)); // Output: 6 (the smallest positive integer that is a multiple of both 2 and 6)
