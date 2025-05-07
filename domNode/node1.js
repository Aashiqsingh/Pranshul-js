const getElement = ()=>{

    let mydiv = document.getElementById("mydiv")

    let h1 = document.createElement("h1")
    h1.innerHTML = "Pranshul soni";


    let link = document.createElement("a")
    link.innerHTML = "Google"
    link.href = "https://google.com";
    link.setAttribute("target","_blank")


    let img = document.createElement("img")
    img.src = "https://static.businessworld.in/Narendra%20Modi_20240610115843_original_image_16.webp";
    img.style.height = "200px";
    img.style.width = "200px"

    let br = document.createElement("br")



    mydiv.appendChild(h1)
    mydiv.appendChild(link)
    mydiv.appendChild(br)
    mydiv.appendChild(img)
}