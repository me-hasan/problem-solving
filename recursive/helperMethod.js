function collectOddvalues(arr){
    let result = [];


    function helper(inputValue){
        if(inputValue.length === 0){
            return;
        }

        if(inputValue[0] % 2 !== 0){
            result.push(inputValue[0]);
        }

        helper(inputValue.slice(1))
        // console.log(inputValue.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOddvalues([1,2,3,4,5,6,7,8,9]));
console.log([1,2,3,4,5,6,7,8,9].slice(-4));