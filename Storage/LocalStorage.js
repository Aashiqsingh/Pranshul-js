const create = ()=>{

    var email = document.getElementById('email');
    var password = document.getElementById('password');


   
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);    


}

const Get = ()=>{


    var x = localStorage.getItem("email");
    var y = localStorage.getItem("password");


    console.log("Email = ",x);
    console.log("Password = ",y);
    
}

const removedata = ()=>{

    // localStorage.removeItem("email");
    // localStorage.removeItem("password");

    localStorage.clear();

}