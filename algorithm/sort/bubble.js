function bubbleShort(arr){
    const swap = (a, b)=> 
    ([arr[b], arr[a]] = [arr[a], arr[b]]);

   
    for (let i = 0; i < arr.length; i++){
       
        for (let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
               

                swap(j, j+1)
              

            }
        }
       
    }
    return arr;
}


var resutl = bubbleShort([2,5,1, 8,4, -3]);

console.log(resutl)