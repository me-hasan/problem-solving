function areThereDuplicates(...args) {
    const str = args.join('');
    let lookup = {};

     for(let chr of str){
         lookup[chr] ? lookup[chr] += 1 : lookup[chr] = 1;
         
         if (lookup[chr] > 1) {
          return true;
      }
     }
     
     return false

}

var result = areThereDuplicates('sdetye');

console.log(result);