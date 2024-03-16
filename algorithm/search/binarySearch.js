function binary(arr, param){
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end) / 2);

    while(arr[mid] !== param && start <= end){
        if(param < arr[mid]) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }

    return arr[mid] === param ?  mid :  -1;
}


let result = binary([1,2,3,5,6,7,8,90], 7);


console.log(result);