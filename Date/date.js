function getDate(){

    // let date = new Date("2022-06-01");
    // let date = new Date("2022-06-01T00:00:00.000Z");

    // console.log(date);

    // console.log(date);
    


    // let date = new Date();


    // console.log(date);
    // console.log("year -------> ", date.getFullYear());
    // console.log("month -------> ", date.getMonth()+1);
    // console.log("date -------> ", date.getDate());
    // console.log("day -------> ", date.getDay());
    // console.log("hours -------> ", date.getHours());
    // console.log("minutes -------> ", date.getMinutes());
    // console.log("seconds -------> ", date.getSeconds());
    // console.log("milliseconds -------> ", date.getMilliseconds());
    // console.log("weekday -------> ", date.getDay());




    let date = new Date();

    date.setFullYear("2020");
    date.setMonth("5");
    date.setDate("1");
    date.setHours("12");
    date.setMinutes("30");
    date.setSeconds("0");
    date.setMilliseconds("0");
    
    console.log(date);
    
    


}


getDate()