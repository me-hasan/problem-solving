function averagePair(arr, ch) {
    // Check if the array is empty
    if (arr.length === 0) {
        return false;
    }

    // Initialize left and right pointers
    let left = 0;
    let right = arr.length - 1;

    // Iterate until left pointer is less than right pointer
    while (left < right) {
        // Calculate the average of the current pair
        const avg = (arr[left] + arr[right]) / 2;

        // Check if the average matches the target average
        if (avg === ch) {
            return true;
        } else if (avg < ch) {
            // If the average is less than the target, move the left pointer to the right
            left++;
        } else {
            // If the average is greater than the target, move the right pointer to the left
            right--;
        }
    }

    // If no pair matches the target average, return false
    return false;
}


console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([1,2,3],2.5)); //true
console.log(averagePair([],4)); //false