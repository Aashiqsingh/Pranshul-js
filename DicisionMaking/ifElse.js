// var n = -13;


// if(n > 0){

//     console.log("Positive number");
// }
// else{
//     console.log("Negative number");
// }

// var n = 11;

// if(n%2==0){
//     console.log("Even number");
// }

// else{
//     console.log("Odd number");
// }

// var a = 10;
// var b = 20;

// if(a > b){
//     console.log("a is greater than b");
// }

// else if(a < b){
//     console.log("b is greater than a");
// }

// var a = 32,b=23,c=14;

// if(a > b)
// {
//     if(a > c)
//     {
//         console.log(a,"a is the",a, "largest");
//     }
//     else{
//         console.log("c is the largest");
//     }
// }
// else{
//     if(b > c)
//     {
//         console.log("b is the largest");
//     }
//     else{
//         console.log("c is the largest");
//     }
// }


var isAlive = true;
var age = 17;
var per = 84;

if(isAlive === true){
    if(age > 18)
    {
        if(per > 85)
        {
            console.log("You are eligible for addmission");
        }
        else{
            console.log("You are not eligible for addmission");
        }
    }
    else{
        console.log("You are kids now");
    }
}
else{
    console.log("Dead");
}