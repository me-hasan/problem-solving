function bubbleShort(arr){
    var noSwap ;
    for (let i = arr.length; i > 0; i--){
        noSwap = true
        for (let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false
            }
        }
        if(noSwap) break;
    }
    return arr;
}


var resutl = bubbleShort([2,5,1, 8,4, -8]);

console.log(resutl)