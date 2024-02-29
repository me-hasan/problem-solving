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
    
    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    console.log(lookup)

    for(let i = 0; i < second.length; i++){
        let letter = second[i];

        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -= 1;
        }
    }

    return true;
    
  }

  validAnagram('dfdfs', 'dfdsf');