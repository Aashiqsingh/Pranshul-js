const science = (name)=>{

    return name + " Your addmission confirm in science stream..";
}

const arts = (name)=>{

    return name + " Your addmission confirm in arts stream..";
}

const commerce = (name)=>{
    return name + " Your addmission confirm in commerce stream..";
}


var per = 55;
var username = "Rahul"

var flag;


if(per > 90){
    flag = science(username)
}
else  if(per > 70){
    flag = commerce(username)
}
else if(per > 50){
    flag = arts(username)
}
else{
    console.log("Please get high marks....");
    
}
console.log(flag);
