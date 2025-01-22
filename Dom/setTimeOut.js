// var body = document.getElementById("body");
var body = document.getElementsByTagName("body")[0]
const orange = ()=>{

    body.style.backgroundColor = "orange";

    setTimeout(()=>{
        green()
    },2000);

}


const green = ()=>{

    body.style.backgroundColor = "green";

    setTimeout(()=>{
        blue()
    },2000);

}

const blue = ()=>{
    body.style.backgroundColor = "blue";

    setTimeout(()=>{
        red()
    },2000)
}

const red = ()=>{
    body.style.backgroundColor = "red";

    setTimeout(()=>{
        orange()
    },2000)
}