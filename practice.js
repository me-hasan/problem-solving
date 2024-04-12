// function binary(arr, find){
//     var startIndex = 0;
//     var endIndex = arr.length - 1;
//     var midIndex = Math.floor((startIndex + endIndex) / 2);
    
//     while(arr[midIndex] !== find && startIndex <= endIndex){
//         if(find < arr[midIndex]) endIndex = midIndex - 1;
//         else startIndex = midIndex + 1;
//         midIndex = Math.floor((startIndex + endIndex) / 2);
//     }

//     return arr[midIndex] == find ? midIndex : - 1;
// }


// let result = binary([1,2,3,5,6,7,8,90], 7);


// console.log(result);