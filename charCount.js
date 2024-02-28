function charCount(strm){
    var result = {};

    for(i = 0; i < strm.length; i++){
        var char = strm[i];
        console.log(result[char]);
        if(result[char] > 0){
            result[char]++;
        }else{
            result[char] = 1
        }
    }
    return result;
}



console.log(charCount("amar sonar bangla"));
