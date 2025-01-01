function submitHandler(event){
    event.preventDefault(); // Prevent form submission
    // alert("Form submitted");

    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value


    var data = {
        name: name,
        email:email
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