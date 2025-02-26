// javascript --> single threaded application




const excelHandler = (option)=>{

    return option.fname + " handle with excel handler.."
}

const csvHandler = (option)=>{

    return option.fname + " handle with csv handler.."
}

const jsonHandler = (option)=>{

    return option.fname + " handle with json handler.."
}

// cb -- callback 
// const Handler = (file,cb)=>{

//     var x = cb(
//         {
//             fname:file,
//             size:"1000kb"
//         }
//     )

//     console.log(x);
    
// }
// const Handler = (file,cb)=>{

//     var x = cb(
//         {
//             fname:file,
//             size:"1000kb"
//         }
//     )

//     // console.log(x);
//     return x;
// }

// const Handler = (file,cb)=>{

//     // var x = cb(
//     //     {
//     //         fname:file,
//     //         size:"1000kb"
//     //     }
//     // )

//     // // console.log(x);
//     // return x;

//     return cb({ fname:file, size:"1000kb" });
// }

const Handler = (file,cb)=> cb({ fname:file, size:"1000kb" });



var fileName = "hardcode.csv";
var temp;

if(fileName.endsWith(".excel"))
{
    temp = Handler(fileName,excelHandler)
}
else if(fileName.endsWith(".csv"))
{
    temp = Handler(fileName,csvHandler)
}
else if(fileName.endsWith(".json"))
{
    temp = Handler(fileName,jsonHandler)
}

console.log(temp);
