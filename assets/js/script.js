var timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var loadPage = function () {
    $("#currentDay").html(moment().format("dddd" + ", " + "MMMM Do"));

    for (let i = 0; i < timeArray.length; i++) {

        var scheduleDiv = $("<div></div>");
        scheduleDiv.addClass("row");

        var timeDiv = $("<div></div>");
        timeDiv.addClass("hour");
        timeDiv.html(timeArray[i]);

        var textDiv = $("<div></div>");
        textDiv.addClass("textarea time-block description");

        if ((i+9) < moment().format("HH")) {
            textDiv.addClass("past");
        } else if ((i+9) > moment().format("HH")) {
            textDiv.addClass("future");
        } else {
            textDiv.addClass("present");
        }

        var saveButton = $("<button></button>");
        saveButton.addClass("saveBtn")

        var saveIcon = $("<i></i>")
        saveIcon.addClass("fas fa-save")

        scheduleDiv.append(timeDiv);
        scheduleDiv.append(textDiv);
        scheduleDiv.append(saveButton);
        saveButton.append(saveIcon);
        $("#schedule").append(scheduleDiv);
    };
}



loadPage();

/*
To Do:

Set up localStorage
Have page load tasks on open

Editable/ saveable tasks

*/