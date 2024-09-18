function demo()
{
    console.log("demo function called...");
    
}



function num(x){

    x()
    console.log(x);
    
}

// num(10)
// num("ram")
// num(true)
// num(12.5)

num(demo)