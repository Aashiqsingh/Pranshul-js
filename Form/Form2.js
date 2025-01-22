function submitHandler(){

    var name = document.getElementById('name')
    var age = document.getElementById('age');
    var gender = document.getElementsByName("gender");

    var output = document.getElementById('output');

    var gen = '';


    if(gender[0].checked === true)
    {
        gen = "Male";
    }
    else if(gender[1].checked === true){
        gen = "Female";
    }
    else if(gender[2].checked === true){
        gen = "Other";
    }
    // console.log(name);
    
    // console.log(gen);

    if(gen === "Male")
    {
        if(age.value > 18)
        {
            output.innerHTML = "<font color='green'>You Are Eligible fot vote</font>"
        }
        else{
            output.innerHTML = "<font color='red'>You Are Not Eligible fot vote</font>"
        }
    }
    else if(gen === "Female"){
        if(age.value > 21)
        {
            output.innerHTML = "<font color='green'>You Are Eligible fot vote</font>"
        }
        else{
            output.innerHTML = "<font color='red'>You Are Not Eligible fot vote</font>"
        }
    }
    else{
        if(age.value > 25)
        {
            output.innerHTML = "<font color='green'>You Are Eligible fot vote</font>"
        }
        else{
            output.innerHTML = "<font color='red'>You Are Not Eligible fot vote</font>"
        }
    }


    var user = {
        name : name.value,
        age : age.value,
        gender : gen
    }

    console.log(user);
    
    


}