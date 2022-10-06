//global variables
var currentDate = moment().format("dddd, MMMM Do, YYYY h:mmA");
$("#currentDay").text(currentDate);

var currentTime = moment().hour();
console.log(currentTime);

var presentTime = document.querySelector(".present");
var futureTime = document.querySelector(".future");
var pastTime = document.querySelector(".past");
var descriptionEvent = document.querySelector(".description");


var hour = {9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: ''};
console.log(Object.keys(hour));


//main code

//functions

//time interval
function setStatus(){
    for (var i = 9; i < 18; i++) {
    
    if (i < currentTime) {
        $("#" + i).addClass("past");
    } else if (i === currentTime) {
        $("#" + i).addClass("present");
    } else {
        $("#" + i).addClass("future");
    }
    }
};

setStatus();

