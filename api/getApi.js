// API --> APllication Programming Interface

const getData = async()=>{
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
    })


    // console.log(res);
    const response = await res.json();
    console.log(response);
    
}