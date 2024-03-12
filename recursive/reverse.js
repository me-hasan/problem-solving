function reverse(str) {
    // Base case: if the string is empty or has only one character, return the string itself
    if (str.length <= 1) {
        return str;
    }
    // Recursive case: return the last character of the string followed by the reversed substring
    return str[str.length - 1] + reverse(str.slice(0, -1));
}

// Example usage:
console.log(reverse("hello")); // Output: "olleh"