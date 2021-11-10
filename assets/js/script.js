var currentDay = document.querySelector("#currentDay");

var currentDay = function () {
    document.getElementById("currentDay"). innerHTML = moment().format("dddd" + ", " + "MMMM Do");
}

//currentDay temp call, once made place call in when "var loadSchedule = function ()" along with localStorage
currentDay();