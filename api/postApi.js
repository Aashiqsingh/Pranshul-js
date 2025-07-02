const postData = async()=>{

    // const user = {
    //     name:"Jatin",
    //     age:25,
    //     email:"jatin@gmail.com",
    //     isActive:true
    // }


    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"hariya",
            age:25,
            email:"hariya@gmail.com",
            isActive:true
        })

    })
    // console.log(response)
    const res = await response.json()
    console.log(res)
}