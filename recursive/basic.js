function coundown(num){
    if(num <= 0){
        console.log("All done");
        return;
    }

    console.log(num);
    num--;
    coundown(num);
}


coundown(5);