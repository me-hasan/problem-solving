function maxFrequency(nums){
    let numObj = {};

    for (let val of nums){
        numObj[val] = (numObj[val] || 0) + 1
    }

    let maxFeq = 0;
    for (let val in numObj){
        maxFeq = Math.max(maxFeq, numObj[val])
    }
    
    let countMaxFeq = 0;
    for (let val in  numObj){
        if(maxFeq === numObj[val]){
            countMaxFeq++;
        }
    }

    return countMaxFeq * maxFeq;

}

console.log(maxFrequency([1, 3, 4, 5, 2, 5, 5, 3])); // 3