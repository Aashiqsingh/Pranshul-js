var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]

const prev = document.getElementById("prev")
var currentIndex = 0;
var image = document.getElementById("image")


prev.addEventListener("click",()=>{

                       //( 3  - 1 + 5 ) % 5
    currentIndex = (currentIndex - 1 + images.length) % images.length

    console.log(currentIndex);

    image.src = "../Image/" + images[currentIndex]
    // image.src = img3.jpg
    
})

const next = document.getElementById("next")
next.addEventListener("click",()=>{
                    //  2 + 1 % 5
    currentIndex = (currentIndex + 1)% images.length
    console.log(currentIndex);

    image.src = "../Image/" + images[currentIndex]
    
})