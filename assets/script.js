//global variables
var currentDate = moment().format("dddd, MMMM Do, YYYY h:mmA");
$("#currentDay").text(currentDate);

var currentTime = moment().hour();
console.log(currentTime);

var presentTime = document.querySelector(".present");
var futureTime = document.querySelector(".future");
var pastTime = document.querySelector(".past");
var descriptionEvent = document.querySelector(".description");


var saveButton = document.querySelector(".saveBtn");

//object hour containing time key and open strings for text input
var hour = {9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: ''};
console.log(Object.keys(hour));




//    descriptionEvent.textContent

// //functions
// function saveEventText() {
//     for (var i = 9; i < 18; i++) {

//     var eventText = descriptionEvent[i].text;
//     console.log(eventText);

//     };

//    localStorage.setItem("eventText", )


//$(document).ready(function(){
    $("#btn9").on("click", function (){
        var eventText9 = $("#9");
        console.log(eventText9);
        localStorage.setItem("event", JSON.stringify(eventText9.val()));
    });

   /* function init () {
        var storedEvent = JSON.parse(localStorage.getItem("event"));
        console.log(storedEvent);

    }*/

    function renderEvents() {
        var storedEvent = JSON.parse(localStorage.getItem("event"));
        if (storedEvent !== null) {
            document.getElementById("#9").val() = storedEvent.text;
            console.log(storedEvent);
        }
    }

//check current time to update event status
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

//click event 
// saveButton.on('click', function(event) {
//     event.preventDefault();
//     saveEventText();
// }};

//function init() to get stored items then render to page

//}
