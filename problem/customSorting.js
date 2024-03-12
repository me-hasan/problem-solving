function customSortString(order, s) {
     // Create a map to store the order of characters
     const orderMap = {};
     for (let i = 0; i < order.length; i++) {
         orderMap[order[i]] = i;
     }
     
     // Sort the string s based on the custom order
     const sortedS = s.split('').sort((a, b) => {
         const orderA = orderMap[a];
         const orderB = orderMap[b];
         
         if (orderA !== undefined && orderB !== undefined) {
             return orderA - orderB; // Both a and b are in order
         } else if (orderA !== undefined) {
             return -1; // a is in order but b is not
         } else if (orderB !== undefined) {
             return 1; // b is in order but a is not
         } else {
             return 0; // Both a and b are not in order, their relative order doesn't matter
         }
     });
     
     // Join the sorted characters to form the permuted string
     return sortedS.join('');
}

// Example usage:
const order1 = "cba";
const s1 = "abcd";
console.log(customSortString(order1, s1)); // Output: "cbad"


