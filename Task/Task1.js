var avlbal = 45000;
var password = 'Aashiq@6354'



const checkBal = ()=>{
    return avlbal;
}

const Withdraw = ()=>{

    const amount = prompt("Enter amount to withdraw :");

    if(amount <= avlbal){
        avlbal = avlbal - amount;
        alert("Withdraw successfully...")
        console.log("After withdraw Your total balance : " + checkBal());
        
    }
    else{
        alert("Insufficient balance.")
    }
}

const deposit = ()=>{
    const amount = parseInt(prompt("Enter amount to deposit :"));

    if(amount > 5000)
    {
        alert("Deposit have successfully...");
        avlbal += amount;
        // console.log("After deposit your avlbal is : ",checkBal());
        alert("After deposit your avlbal is : "+checkBal())
        
    }
    else{
        alert("Minimum deposit should be 5000.");
    }
}


var atm = confirm("Do you want to enter in ATM.")
if(atm === false){
    console.log("Thankyou for visiting ATM.");
    
}
else{
    var pin = prompt("Please enter your 4-digit PIN:");

    if(pin !== password){
        console.log("Invalid PIN. Transaction cancelled.");
    }
    else{
        var choice = prompt("1 for Withdraw \n2 for Deposit \n3 for CheckAmount \n\n\n Enter your choice :-")
        switch(choice){
            case '1':
                Withdraw()
                break;

            case '2':
                deposit()
                break;

            case '3':
                checkBal();
                break;

            default:
                console.log("Invalid choice. Transaction cancelled.");
                break;
        }
    }
}
