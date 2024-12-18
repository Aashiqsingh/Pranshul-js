var colors = ["red","green","yellow","blue","pink","violet","purple","gray","orange"]
const changeClr = () =>{

    var random = Math.floor(Math.random() * colors.length)
    console.log(random);
    

    var output = document.getElementById("output")
    output.style.backgroundColor = colors[random]
}