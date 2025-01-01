function changeTxt(){

    var txt = document.getElementById("txt");

    console.log(txt.value);

    var output = document.getElementById("output");
    output.innerHTML = txt.value;
    
    
}