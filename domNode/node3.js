var students = [
    {
        id: 1,
        name: "pranshul",
        email: "pranshul@gmail.com",
        age: 13,
        gender: "male"
    },
    {
        id: 2,
        name: "rahul",
        email: "rahul@gmail.com",
        age: 22,
        gender: "male"
    },
    {
        id: 3,
        name: "priya",
        email: "priya@gmail.com",
        age: 21,
        gender: "female"
    },
    {
        id: 4,
        name: "riya",
        email: "riya@gmail.com",
        age: 22,
        gender: "female"
    }
]

let thead = document.getElementById("thead")
thead.style.display = "none"

const getData = () => {
    thead.style.display = ""

    let tbody = document.getElementById("tbody")

    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let genderTd = document.createElement("td")

        idTd.innerHTML = students[i].id
        nameTd.innerHTML = students[i].name
        emailTd.innerHTML = students[i].email
        ageTd.innerHTML = students[i].age
        genderTd.innerHTML = students[i].gender





        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(ageTd)
        tr.appendChild(genderTd)

    }
}