const wordHandler = (option)=>{
    return option.fname + " handle with wordHandler.."
}
const pdfHandler = (option)=>{
    return option.fname + " handle with pdfHandler.."
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