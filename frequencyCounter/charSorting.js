/**
 * short character
 */

function charShorting(str){
    let frequencyCounter = {};

    for(let char of str){
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    
    console.log(frequencyCounter);

    const shorChar = Object.keys(frequencyCounter).sort((a, b)=> frequencyCounter[b] - frequencyCounter[a]);

    console.log(shorChar);

    let strAfrerShort = '';

    for(let char of shorChar){
        strAfrerShort += char.repeat(frequencyCounter[char]);
    }

    console.log(strAfrerShort);
    
    return strAfrerShort;
}

charShorting('dfsdf');