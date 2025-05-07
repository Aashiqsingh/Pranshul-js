function getElement(){
    let mydiv = document.getElementById("mydiv")


    
    let nameLable = document.createElement("lable")
    nameLable.innerHTML = "Name :";
    let nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name"

    let emailLable = document.createElement("lable")
    emailLable.innerHTML = "Email :"
    let emailInput = document.createElement("input")
    emailInput.type = "email"
    emailInput.id = "email"

    let btn = document.createElement("button")
    btn.innerHTML = "submit"
    btn.addEventListener("click",()=>{
        // alert("form submitted..")
        let name = document.getElementById("name")
        let email = document.getElementById("email")

        console.log("Name .........",name.value);
        console.log("Email........",email.value);
        
        
    })
    





    mydiv.appendChild(nameLable)
    mydiv.appendChild(nameInput)
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(emailLable)
    mydiv.appendChild(emailInput)
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(btn)
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(document.createElement("br"))


}