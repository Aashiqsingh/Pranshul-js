const submitHandler = async(event)=>{
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const IsActive = document.getElementById("IsActive").value;

    // console.log(name,email,age,IsActive);
    const data = {
        name:name,
        email:email,
        age:age,
        IsActive:IsActive
    }

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const res = await response.json();
    console.log(res);

    if(response.status === 201){
        alert("User Created Successfully");
        location.href = "./getApi3.html"
    }

    
}