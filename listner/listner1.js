let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    alert("button clicked...")
})

btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "red"
})

btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "green  "
})