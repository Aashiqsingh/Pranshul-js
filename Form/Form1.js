function submitHandler(event){
    event.preventDefault(); // Prevent form submission
    // alert("Form submitted");

    var name = document.getElementById("name")
    var email = document.getElementById("email")


    var data = {
        name: name,
        email:email
    }

    var nameErr = document.getElementById("nameErr");

    if(name.value.length < 4)
    {
        nameErr.innerHTML = "Name is too short"
        nameErr.style.color = "red"
        name.style.border = "2px solid red"
    }
    else{
        name.style.border = "2px solid green"
    }

    
    

    // console.log(data);
    


    // console.log(name);
    // console.log(email);

    // let output = document.getElementById("output");
    // // output.innerHTML = name + " " + email
    // // output.innerHTML = data.name
    // output.innerHTML = JSON.stringify(data);

    // console.log(JSON.stringify(data)[0]);
    
    





    console.log("Form submitted");
    
}

// First name , last name , email , mobile , age > 18 ? you r not valid