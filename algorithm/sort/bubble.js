function bubbleShort(arr){
    const swap = (a, b)=> 
    ([arr[b], arr[a]] = [arr[a], arr[b]]);

    var noSwap;
    for (let i = 0; i < arr.length; i++){
        noSwap = true;
        for (let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
               

                swap(j, j+1)
                noSwap = false;

            }
        }
        if(noSwap) break;
    }
    return arr;
}


var resutl = bubbleShort([2,5,1, 8,4, -3]);

console.log(resutl)