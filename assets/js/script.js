var timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var loadPage = function () {
    $("#currentDay").html(moment().format("dddd" + ", " + "MMMM Do"));

    for (let i = 0; i < timeArray.length; i++) {

        var scheduleDiv = $("<div>");
        scheduleDiv.addClass("row");

        var timeDiv = $("<div>");
        timeDiv.addClass("hour");
        timeDiv.html(timeArray[i]);

        var textDiv = $("<div>");
        textDiv.addClass("time-block");

        if ((i+9) < moment().format("HH")) {
            textDiv.addClass("past");
        } else if ((i+9) > moment().format("HH")) {
            textDiv.addClass("future");
        } else {
            textDiv.addClass("present");
        }

        var textInput = $("<textarea>");
        textInput.addClass("textarea description");

        var saveButton = $("<button>");
        saveButton.addClass("saveBtn")

        var saveIcon = $("<i>")
        saveIcon.addClass("fas fa-save")

        scheduleDiv.append(timeDiv);
        scheduleDiv.append(textDiv);
        textDiv.append(textInput);
        scheduleDiv.append(saveButton);
        saveButton.append(saveIcon);
        $("#schedule").append(scheduleDiv);

        // saveButton.addEventListener("click", function () {addSchedule(timeArray[i])});
    };
}

var storeSchedule = {
    "schedule": []
}

var addSchedule = function () {
    
}

loadPage();


/*
To Do:

Set up localStorage
Have page load tasks on open

Editable/ saveable tasks

*/