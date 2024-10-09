var language = ["hindi","english","gujarati","marathi","telggu","urduu"]

// console.log(language);
// var flag = true;
// for(let i=0;i<language.length;i++){

//     // console.log(language[i]);

//     if(language[i].length < 5){
//         flag = false;
//         break;
//     }
    
// }

// console.log(flag);

// lang == language[i]

// var x = language.some((lang)=>{
//     return lang.length < 5;
// })

// console.log(x);

var x = language.some((lang)=> lang.startsWith("h"))
console.log(x);





