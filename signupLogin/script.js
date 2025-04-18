const submitHandler = (event)=>{
    event.preventDefault();

    let fname =  document.getElementById("fname").value 
    let lname =  document.getElementById("lname").value
    let email =  document.getElementById("email").value 
    let pass = document.getElementById("pass").value 
    let age = document.getElementById("age").value 

    var student = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass,
        age: age
    }
    console.log(student)

    localStorage.setItem('SignEmail',email);
    localStorage.setItem('SignPass',pass);


   
    alert("Form submission..")

    location.href = "./login.html"

}

const loginUser = ()=>{


    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var SignEmail = localStorage.getItem("SignEmail")
    var SignPass = localStorage.getItem("SignPass")

    if(SignEmail == email && SignPass == pass)
    {
        alert("Login successfully ...!");
    }



}