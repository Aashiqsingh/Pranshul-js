const lasvegas = (amount , name)=>{

    return name + " your picnic is confirm in lasvegas with package "+ amount
    
}

const singapore = (amount , name)=>{
    
    return name + " your picnic is confirm in singapore with package "+ amount
    
}

const goa = (amount , name)=>{
    
    return name + " your picnic is confirm in goa with package "+ amount
    
}

const travel = (name,amount,cb)=>{

    var x = cb(amount,name)
    console.log(x);
    
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