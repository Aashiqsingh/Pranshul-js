var language = ["hindi","english","french","gujarati","hungarian","marathi","bengali"];


// for(let i=0;i<lang.length;i++){
//     console.log(lang[i]);
// }

// for(let lang in language){
//     console.log(lang);
    
// }


var arr = []
language.forEach((lang)=>{
    // console.log(lang);
    arr.push(lang.toUpperCase())
})

console.log(arr);
