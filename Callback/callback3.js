const lasvegas = (amount , name)=>{

    console.log(name + " your picnic confirmed in lasvegas with package "+ amount);
    
}

const singapore = (amount , name)=>{
    console.log(name + " your picnic confirmed in singapore with package "+ amount);

}

const goa = (amount , name)=>{
    console.log(name + " your picnic confirmed in goa with package "+ amount);
}

const travel = (name,amount,cb)=>{

    cb(amount,name)
}

var budget = 3500;

switch(budget > 4000 ? "a" : budget > 3000 ? "b": "c"){
    case "a": travel("pranshul",budget,lasvegas)
        break;
    case "b": travel("pranshul",budget,singapore)
        break;
    case "c": travel("pranshul",budget,goa)
        break;
    default: console.log("Insufficient budget for picnic")
}