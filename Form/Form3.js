const submitHandler = (event)=>{
    event.preventDefault();
 

    // regex : regular expression

    // var unameRegex = /^[A-Z]{1}[a-zA-Z]+[0-9]+$/;
    // var unameRegex = /^[^a]+$/

    // var uname = document.getElementById('uname');

    // if(uname.value.match(unameRegex))
    // {
    //     alert("Username is valid");
    // }
    // else{
    //     alert("Username is invalid");
    // }

    // var mobile = document.getElementById('mobile');
    // var mobileRegex = /^[6-9]{1}[0-9]{9}$/;

    // if(mobile.value.match(mobileRegex)){
    //     alert("Mobile number is valid");
    // }
    // else{
    //     alert("Mobile number is invalid");
    // }


    var email = document.getElementById("email");

    var emailRegex = /^[a-z0-9]+\@{1}[a-z]+\.{1}[a-z]+$/;

    if(email.value.match(emailRegex)){
        alert("Email is valid");
    }
    else{
        alert("Email is invalid");
    }



}

// UserName :
// Password :
// Email :
// Mobile : 
