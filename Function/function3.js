function isPrime(value){

    var flag = false;
    for(let i=2;i<value;i++){
        if(value%i==0){
            flag = true;
        }
        
    }
    if(flag == true){
        return "Not prime number"
    }
    else{
        return "Prime number"
    }
}

var x = isPrime(17)
console.log(x);
