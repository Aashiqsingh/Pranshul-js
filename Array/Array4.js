var language = ["hindi","english","gujarati","marathi","telggui","urdu"]


// var flag = false;

// for(let i=0;i<language.length;i++){

//     if(language[i].length > 3)
//     {
//         flag = true;
//         break;
//     }
// }

// console.log(flag);


// var x = language.every((lang)=>{
//     return lang.length > 4
// })

// console.log(x);

var x = language.every((lang)=> lang.includes("i"))
console.log(x);
