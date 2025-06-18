// const getData = ()=>{
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 message:"Data fetched sucessfully...",
//                 status:200
//             })
//         },3000)
//     })


//     promise.then((data)=>{
//         console.log(data)

//         console.log("Ending fetching data...");
        
//     })
//     promise.catch((err)=>{
//         console.log(err)
//     })
// }

// getData()



// const getData = ()=>{
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 message:"Data fetched sucessfully...",
//                 status:200
//             })
//         },3000)
//     })


//     return promise
// }

// let ans = getData()
// // console.log(ans);
// ans.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// getData().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched sucessfully...",
                status:200
            })
        },3000)
    })
   
}

getData().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})