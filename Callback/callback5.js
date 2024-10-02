const wordHandler = (option)=>{

    console.log(option.fname + " file with size " + option.size);
    
}

const pdfHandler = (option)=>{
    
    console.log(option.fname + " file with size " + option.size);
}

const csvHandler = (option)=>{
    
    console.log(option.fname + " file with size "+ option.size );
}

const handler = (file,cb)=>{
    cb(file)
}

var fileName = "abc.csv";

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