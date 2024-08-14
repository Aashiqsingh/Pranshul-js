const employee = {

    empid: 102,
    name:"ajay",
    email:"ajay@gmail.com",
    phone:[8973298479,7346983483,723462347],
    age:23,
    address:{
        street:"234 C.G road",
        city:"Ahmedabad",
        state:"Gujarat",
        pincode:380015
    }
}

console.log(employee);

console.log(employee.name);
console.log(employee.email);
console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.city);

console.log(employee.phone[0]);

// for(let i=0;i<employee.phone.length;i++){
//     console.log(employee.phone[i]);
    
// }





