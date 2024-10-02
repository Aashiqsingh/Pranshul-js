const wordHandler = (option)=>{

    return option.fname + " file with size "+ option.size
    
}

const pdfHandler = (option)=>{
    
    return option.fname + " file with size "+ option.size 
    
}

const csvHandler = (option)=>{
    
    return option.fname + " file with size "+ option.size 
    
}

const handler = (file,cb)=>{
    return cb(file)
    
}

var fileName = "abc.pdf";
var flag;

if(fileName.endsWith(".word")){
    flag = handler({fname:fileName,size:"1000kb"},wordHandler)
}
else if(fileName.endsWith(".csv")){
    flag = handler({fname:fileName,size:"500kb"},csvHandler)
}
else if(fileName.endsWith(".pdf")){
    // handler({file:fileName,size:"2000kb"},pdfHandler)
    flag = handler({
        fname:fileName,
        size:"1500kb"
    },pdfHandler)
}
else{
    console.log("Invalid file format")
}

console.log("....",flag);
