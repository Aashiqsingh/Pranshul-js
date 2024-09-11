const lasvegas = (option)=>{

    return option.fname + " Your lasvegas tour confirmed with packeage "+option.amount;
}

const singapore = (option)=>{
    return option.fname + " Your singapore tour confirmed with packeage "+option.amount;
}

const london = (option)=>{
    return option.fname + " Your london tour confirmed with packeage "+option.amount;
}

const goa = (option)=>{
    return option.fname + " Your goa tour confirmed with packeage "+option.amount;
}

var flag;
var budget = 11000;
var userName = "pranshul"

if(budget > 15000)
{
    flag = lasvegas({fname:userName,amount:budget})
    // lasvegas({
    //     fname:userName,
    //     amount:budget
    // })
}
else if(budget > 12000){
    flag = singapore({fname:userName,amount:budget})
}
else if(budget > 10000){
    flag = london({fname: userName,amount:budget})
}
else if(budget > 5000){
    flag =goa({fname:userName,amount:budget})
}
console.log(flag);
