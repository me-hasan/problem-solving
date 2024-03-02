/**
 * anagram
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */

function validAnagram(first, second){
    if (first.length !== second.length) {
        return false;
    }

    let lookup = {};
    
    // for(let i = 0; i < first.length; i++){
    //     let letter = first[i];
    //     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    // }
    for(let char of first){
        lookup[char] = (lookup[char] || 0) + 1;
    }
    

    // for(let i = 0; i < second.length; i++){
    //     let letter = second[i];

    //     if(!lookup[letter]){
    //         return false
    //     }else{
    //         lookup[letter] -= 1;
    //     }
    // }
    
    for(let letter of second){
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -= 1;
        }
    }

    return true;
    
  }

  console.log(validAnagram('dfdfs', 'dfdsf')); // true
  console.log(validAnagram('dfdfs', 'sfddf')); // true
  console.log(validAnagram('dfdfs', 'sdddf')); // false 
  console.log(validAnagram('dfdfs', 'sssddf')); // false 