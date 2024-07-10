// // there are three keyword 
// 1. var -- global scope 
// 2. let -- block scope 
// 3. const -- block scope 


// var a = 10;

// console.log("outer value of a = ",a);

// let b = 12.2;
// console.log("outer value of b = ",b);

{
    // console.log("inner value of a = ",a);
    // console.log("inner value of b = ",b);


    var a = 10;
    console.log("inner value of a = ",a);

    let b = 13;
    console.log("inner value of b = ",b);

}

let b = 12.2;
console.log("inner value of b = ",b);
console.log("outer value of a = ",a);
console.log("outer value of b = ",b);

