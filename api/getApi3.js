let thead = document.getElementById("thead");
thead.style.display = "none";
const getData = async()=>
{
    const response = await fetch("https://node5.onrender.com/user/user",
    {
        method: "GET",
    }
    )
    const res = await response.json()
    console.log(res.data);
    thead.style.display = "";
    let tbody = document.getElementById("tbody");
    res.data.forEach((user)=>
    {
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let isActiveTd = document.createElement("td");
        let deleteTd = document.createElement("td");
        let btn = document.createElement("button");

        idTd.innerHTML = user._id;
        nameTd.innerHTML = user.name;
        emailTd.innerHTML = user.email;
        ageTd.innerHTML = user.age;
        isActiveTd.innerHTML = user.isActive;
        btn.innerHTML = "DELETE";
        btn.className = "btn btn-danger";
        btn.addEventListener("click",async()=>{
            // alert(user._id)
            const response2 = await fetch("https://node5.onrender.com/user/user/"+user._id,{
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json"
                }
            });
            // console.log(response2);
            if(response2.status === 204){
                alert("User Deleted Successfully");
                tr.remove();
            }
            
        })

        tbody.append(tr);
        tr.append(idTd);
        tr.append(nameTd);
        tr.append(emailTd);
        tr.append(ageTd);
        tr.append(isActiveTd);
        tr.append(deleteTd);
        deleteTd.append(btn);
    }
    ) 
}