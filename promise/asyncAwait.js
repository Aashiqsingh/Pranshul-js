function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched sucessfully...",
                status:200
            })
        },4000)
    })
}


const answer = async()=>{
    console.log("starting....");

    let x = await getData()
    console.log(x);

    console.log("ending....");
}

answer()






// async function answer(){

//     console.log("starting....");
    

//     let ans = await getData()
//     console.log(ans);

//     console.log("ending....");
    
// }

// answer()