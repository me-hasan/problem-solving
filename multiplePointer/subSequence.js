function isSubsequence(str1, str2) {
    // Initialize pointers for both strings
    let pointer1 = 0;
    let pointer2 = 0;

    // Iterate over the second string
    while (pointer2 < str2.length) {
        // If characters match, move pointer for first string
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
        }
        // Move pointer for second string in any case
        pointer2++;
    }

    // If pointer1 reaches the end of str1, it means all characters in str1 were found in str2
    return pointer1 === str1.length;
}


console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false