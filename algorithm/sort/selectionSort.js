function selectionSort(arr){
    const swap = (a, b)=> 
    ([arr[b], arr[a]] = [arr[a], arr[b]]);

   
    for (let i = 0; i < arr.length; i++){
       let lowest = i;
        for (let j = i+1; j < arr.length; j++){

            if(arr[lowest] > arr[j]){
               
                lowest = j;

            }
        }
        if(i !== lowest)    swap(i, lowest)
       
    }
    return arr;
}


var resutl = selectionSort([2,5,1, 8,4, -3]);

console.log(resutl)