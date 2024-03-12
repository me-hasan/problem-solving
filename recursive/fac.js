function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
}

 console.log(factorial(3)); // 