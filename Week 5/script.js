window.onload = function() {
    let result = document.getElementById("result");
    let dayDisplay = document.getElementById("dayDisplay");

    let today = new Date();
    let hour = today.getHours();
    let day = today.getDay();

    console.log("today: " + today);
    console.log("hour: " + hour);
    console.log("day: " + day);

    dayDisplay.textContent = "Today is day " + day + " and the hour is " + hour;

    if( day === 1 ) {
        result.textContent = "Do you have a case of the Mondays?";
    }
    else if ( day === 5 && (hour >= 12 && hour <= 24) ) {
        result.textContent = "It's almost the weekend!";
    }
    else if ( day === 6 || day === 0 ) {
        result.textContent = "It's the weekend!!!";
    }
    else if ( hour < 12) {
        result.textContent = "Have a good morning!";
    }
    else if ( hour >= 12 && hour <=24 ) {
        result.textContent = "Have a good day!";
    }
}