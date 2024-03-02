function minSubArrayLen(nums, target) {
    if (nums.length === 0) {
        return 0;
    }

    let minLen = Infinity;
    let sum = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while (sum >= target) {
            minLen = Math.min(minLen, i - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return minLen !== Infinity ? minLen : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2 (the subarray [4, 3] has a sum of 7)
console.log(minSubArrayLen([2,1,6,5,4], 9)); // Output: 2 (the subarray [5, 4] has a sum of 7)
