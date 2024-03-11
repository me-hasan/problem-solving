function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    
    if(num > arr.length) null;

    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];

        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}


console.log(maxSubArraySum([2,3,4,6,1, 23], 3));