//global variables

//current date and time in header
var currentDate = moment().format("dddd, MMMM Do, YYYY h:mmA");
$("#currentDay").text(currentDate);

//current time to compare in setStatus function
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


//click events to start function that saves text to local storage
$("#btn9").on("click", function (){
    var eventText9 = $("#9");
    console.log(eventText9);
    localStorage.setItem("9", JSON.stringify(eventText9.val()));
});

$("#btn10").on("click", function (){
    var eventText10 = $("#10");
    console.log(eventText10);
    localStorage.setItem("10", JSON.stringify(eventText10.val()));
});

$("#btn11").on("click", function (){
    var eventText11 = $("#11");
    console.log(eventText11);
    localStorage.setItem("11", JSON.stringify(eventText11.val()));
});

$("#btn12").on("click", function (){
    var eventText12 = $("#12");
    console.log(eventText12);
    localStorage.setItem("12", JSON.stringify(eventText12.val()));
});

$("#btn13").on("click", function (){
    var eventText13 = $("#13");
    console.log(eventText13);
    localStorage.setItem("13", JSON.stringify(eventText13.val()));
});

$("#btn14").on("click", function (){
    var eventText14 = $("#14");
    console.log(eventText14);
    localStorage.setItem("14", JSON.stringify(eventText14.val()));
});

$("#btn15").on("click", function (){
    var eventText15 = $("#15");
    console.log(eventText15);
    localStorage.setItem("15", JSON.stringify(eventText15.val()));
});

$("#btn16").on("click", function (){
    var eventText16 = $("#16");
    console.log(eventText16);
    localStorage.setItem("16", JSON.stringify(eventText16.val()));
});

$("#btn17").on("click", function (){
    var eventText17 = $("#17");
    console.log(eventText17);
    localStorage.setItem("17", JSON.stringify(eventText17.val()));
});


//Create a function to load information saved in local storage and render to timeblocks
function init () {

    $("#9").val(JSON.parse(localStorage.getItem("9")));
    $("#10").val(JSON.parse(localStorage.getItem("10")));
    $("#11").val(JSON.parse(localStorage.getItem("11")));
    $("#12").val(JSON.parse(localStorage.getItem("12")));
    $("#13").val(JSON.parse(localStorage.getItem("13")));
    $("#14").val(JSON.parse(localStorage.getItem("14")));
    $("#15").val(JSON.parse(localStorage.getItem("15")));
    $("#16").val(JSON.parse(localStorage.getItem("16")));
    $("#17").val(JSON.parse(localStorage.getItem("17")));
    
}

init()


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


