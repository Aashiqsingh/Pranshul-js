function science (name , per){

    console.log( name + " your addmission confirm in science stream with per " + per);
    
}

function commerce (name , per){
    console.log(name + " your addmission confirm in commerce stream with per " + per);
    
}

function arts(name , per){
    console.log(name + "Your addmission confirm in arts stream with per " + per);
    
}
// cb-- callback -- function name
function addmission(fname,per,cb){

    cb(fname,per)
}

var percentage = 75;

if(percentage > 90)
{
    addmission("pranshul",percentage,science)
}
else if(percentage > 70){
    addmission("pranshul",percentage,commerce)
}
else if(percentage > 50){
    addmission("pranshul",percentage,arts)
}else{
    console.log("Not eligible for any stream")
}