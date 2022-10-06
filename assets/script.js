//global variables
var currentDate = moment().format("dddd, MMMM Do, YYYY h:mmA");
$("#currentDay").text(currentDate);

var currentTime = moment().hour();
console.log(currentTime);

var presentTime = document.querySelector("present");
var futureTime = document.querySelector("future");
var pastTime = document.querySelector("past");

var hour = {9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: ''};
console.log(Object.keys(hour));


//main code

//functions

//time interval
function setStatus(){
    for (var i = 0; i < hour.length; i++); {
    
    if (currentTime == hour[0]) {
        console.log(i);
        $('description').setAttribute('present');
    } 
    else if (currentTime < hour[0]) {
        console.log(i);
        $('description').setAttribute('future');
    } 
    else if (currentTime > hour[0]) {
        console.log(i);
        $('description').setAttribute('past');
    }
    }
};

setStatus();

