const EmailSent = ()=>{
    // event.preventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    const params = {
        name:name,
        email:email,
        message:message
    }

    const serviceId = "service_t3br9kc";
    const templateId = "template_xkxwe24";

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log("res...",res);
        
    }).catch((err)=>{
        console.log("error...",err);
        
    })

}