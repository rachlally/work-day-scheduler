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
    for (let i = 9; i < 18; i++); {
    
    if (currentTime == hour[0]) {
        $("# i").addClass(".present");
    } 
    else if (currentTime < hour[0]) {
        $(".description").addClass(".future");
    } 
    else if (currentTime > hour[0]) {
        $(".description").addClass(".past");
    }
    }
};

setStatus();

