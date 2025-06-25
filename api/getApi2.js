let thead = document.getElementById("thead");
thead.style.display = "none";

const getData = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=2",{
        method: "GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })

    // console.log(response);
    const res = await response.json()
    console.log(res.data);

    thead.style.display = "";


    let tbody = document.querySelector("tbody");
    res.data.forEach((user)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let firstNameTd = document.createElement("td");
        let lastNameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let avatarTd = document.createElement("td");
        let img = document.createElement("img");


        idTd.innerHTML = user.id;
        firstNameTd.innerHTML = user.first_name;
        lastNameTd.innerHTML = user.last_name;
        emailTd.innerHTML = user.email;
        img.src = user.avatar;




        tbody.append(tr);
        tr.append(idTd);
        tr.append(firstNameTd);
        tr.append(lastNameTd);
        tr.append(emailTd);
        tr.append(avatarTd);
        avatarTd.append(img);
    })
    
}