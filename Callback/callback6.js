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
    var x = cb(file)
    console.log("file calling ...",x);
    
}

var fileName = "abc.word";

if(fileName.endsWith(".word")){
    handler({fname:fileName,size:"1000kb"},wordHandler)
}
else if(fileName.endsWith(".csv")){
    handler({fname:fileName,size:"500kb"},csvHandler)
}
else if(fileName.endsWith(".pdf")){
    // handler({file:fileName,size:"2000kb"},pdfHandler)
    handler({
        fname:fileName,
        size:"1500kb"
    },pdfHandler)
}
else{
    console.log("Invalid file format")
}