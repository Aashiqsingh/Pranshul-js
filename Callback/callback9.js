const wordHandler = (option)=>{
    return option.fname + " handle with wordHandler.."
}
const pdfHandler = (option)=>{
    // return option.fname + " handle with pdfHandler.."
    return {
        collegeName : "LG Engeering",
        message: option.fname  + " your addmisiion successfully..",
        startDate: "10/0325",
        endDate: "10/0325",
        courseName: "Bachelor of Engineering",
        courseDuration: "4 years",
        courseFee: "Rs. 50000"
    }
}

const pngHandler = (option) => {
    return option.fname + " handle with pngHandler"
}

const jpgHandler = (option) => {
    return option.fname + " handle with jpgHandler"
}

const Handler = (file,cb)=>{
    var x = cb({fname:file.name,size:file.size})
    console.log(x);
    
}

var fileName = "abc.word";

if(fileName.endsWith(".word"))
{
    Handler(
        {
            name:fileName,
            size:"1000kb"
        },wordHandler
    )
}
else if(fileName.endsWith(".pdf"))
{
    Handler({
        name:fileName,
        size:"2000kb"
    },pdfHandler)
}
else if(fileName.endsWith(".jpg"))
{
    Handler({name:fileName,size:"3000kb"},jpgHandler)
}
else if(fileName.endsWith(".png")){
    Handler({name:fileName,size:"4000kb"},pngHandler)
}