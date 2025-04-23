const box = document.getElementsByClassName("box")
console.log(box);


box[0].addEventListener("click",()=>{
    box[2].style.backgroundColor = "green"
})


box[2].addEventListener("mouseenter",()=>{
    box[0].style.backgroundColor = "red"
})

box[2].addEventListener("mouseleave",()=>{
    box[2].style.borderRadius = "50%"
})


var colors = ["red","green","blue","orange","yellow","pink","purple","skyblue","teal"]
box[1].addEventListener("mousemove",()=>{
    const randomIndex = Math.floor(Math.random() * colors.length)

    box[2].style.backgroundColor = colors[randomIndex]
})
