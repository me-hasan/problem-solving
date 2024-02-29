function countUniqueValue(arr){
    let countArray = {};
    arr.sort((a, b)=> a-b);
    for(let val of arr){
        let num = arr[val];
        countArray[num] ? countArray[val] += 1 : countArray[val] = 1;
    }

    let countUnique = 0;
   return countUnique = Object.keys(countArray).length;
}

console.log(countUniqueValue([1,1,3,2,4]))