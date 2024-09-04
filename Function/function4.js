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
