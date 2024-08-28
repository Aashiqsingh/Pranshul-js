function lasvegas(name , amount){

    return name + " Your picnic confirmed lasvegas with pakage "+amount
}

function singapore(name , amount){
    return name + " Your picnic confirmed singapore with package "+amount

}

function tokyo(name , amount){
    return name + " Your picnic confirmed tokyo with package "+amount

}

var fname = "Raju"
var budget = 1200;

var flag;


if(budget > 1000){
    flag = lasvegas(fname, budget)
}
else if(budget > 700){
    flag = singapore(fname , budget)
}
else if(budget > 400){
    flag = tokyo(fname , budget)
}
else{
    console.log("Sorry, you don't qualify for any picnic")
}

console.log(flag);
