const mydiv = document.getElementById("mydiv");


mydiv.addEventListener("click",()=>{
    mydiv.style.height = "200px"
    mydiv.style.width = "200px";
    mydiv.style.backgroundColor = "red"
})

mydiv.addEventListener("dblclick",()=>{
    mydiv.style.color = "white";
    mydiv.style.fontSize = "30px"
})

mydiv.addEventListener("mouseleave",()=>{
    mydiv.style.backgroundColor = "green"
})