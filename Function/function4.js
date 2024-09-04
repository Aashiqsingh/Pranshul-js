// function strrev(str){

//     return str.split("").reverse().join("")

// }

// var x = strrev("pranshul")
// console.log(x);

// function countOccurrences(str, char) {
//     return str.split(char).length -1;
// }

// console.log(countOccurrences("hello world", "l"));


function SumOfDigit(num){
var sum = 0;

    while(num!=0){
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

var x = SumOfDigit(456)
console.log("Sum of all digits...",x);



// user  -- amount < 10000
// /please enter opening bal:
// min op balc req is 10000
// if user enteres less than 10000 then ask again to enter balance..
//give 3 chance only to enter correct balance
//after 3 chance print error message in console..
//if user enter correct balacne bw 1 to 3 chance print success message in console