var language = ["hindi","english","french","gujarati","hungarian","marathi","bengali"];


// map -- it will return new array with same length 

// var newArr = language.map((lang)=>{

//     return lang.length > 5
// })

// console.log(newArr);


// filter -- it will return new array with modified data 

// var filterData = language.filter((lang)=>{
//     return lang.length > 6
// })

// console.log(filterData);

// var filterData = language.filter((lang)=> lang.startsWith("h"))
// console.log(filterData);

var user = "french";

var filterData = language.filter((lang)=>{

    return lang != user
})

console.log(filterData);

