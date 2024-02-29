function sumZero(arr){
    let left = 0;
    let right  = arr.length - 1;
    arr.sort((a, b) => a - b); 
    console.log(arr);
    let arr1 = [];
    while(left < right){
        let sum = arr[left] + arr[right];
        arr1.push(sum);
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
    return null;
}

console.log(sumZero([1,-4,-3,-2,-1,0,1,2,4,3,10]));


