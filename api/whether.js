const getTemp = async()=>{

    let cityName = document.getElementById("cityName").value;


    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=8f87151aa8e3a496171fb38f0f4f45a7&units=metric&q="+cityName)
    // console.log(response);
    const data = await response.json();
    console.log(data);
    
}