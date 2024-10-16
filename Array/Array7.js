var language = ["hindi","english","french","gujarati","hungarian","marathi","bengali"];


// const deleteLang = (langName)=>{


//     var filterData = language.filter((lang)=>{
//         return lang != langName;
//     })

//     return filterData

// }




// var deleteDate = "marathi"
// var x = deleteLang(deleteDate)
// console.log(x);


// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName;
//     })

    
// }

// var x = deleteLang("english")
// console.log(x);


// const deleteLang = (langName)=>{

//     return language.filter((lang)=> lang != langName)
// }

// // var x = deleteLang("french")
// // console.log(x);

// console.log(deleteLang("french"));


const deleteLang = (langName)=> language.filter((lang)=> lang != langName)
console.log(deleteLang("gujarati"));


