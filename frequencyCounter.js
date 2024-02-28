// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     for(let i=0; i<arr1.length; i++){
//         let index = arr2.indexOf(arr1[i] ** 2);
//         if(index === -1){
//             return false;
//         }
//         arr2.splice(index,1)
//     }
//     return true;
// }


/**
 * same two array are same
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */

function anotherWaySame(arr1, arr2){
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key of arr1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }

    }
    return true;

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
}

// [1,2,3,2] , [9,1,4,4]

console.log(anotherWaySame([1,2,3,2] , [1,9,4, 4]));