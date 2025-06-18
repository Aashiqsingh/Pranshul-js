const getOrder = ()=>{

    console.log("food is going to be placed..");
    

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:121,
                message:"Order placed sucessfully...",
                amount:450,
            })
        },4000)
    })
}

const getPayment = (data)=>{

    console.log("payment is going to be made..");
    

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment sucessfully...",
                amount:data.amount,
            })
        },4000)
    })
}


getOrder().then((data)=>{
    console.log("food ordered data.....",data);
    getPayment(data).then((data)=>{
        console.log("payment data.....",data);
    }).catch((err)=>{
        console.log("error in payment data.....",err);
    })
    
}).catch((err)=>{
    console.log("error in food ordered data.....",err);
})