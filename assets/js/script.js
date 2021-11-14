var timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var emptySchedule = {
    "schedule": []
}

var storeSchedule = emptySchedule;

//bugggss?
//possibly only saving first item to local storage
//not loading items from local storage
//on bug fix day, add alerts. Most likely and issue of deleting the items right away. 
// concern on the findIndex or any filters for sure, could be something else too regarding defined values

var loadPage = function () {
    $("#currentDay").html(moment().format("dddd" + ", " + "MMMM Do"));

    var localSchedule = localStorage.getItem("schedule");
    if (localSchedule != null) {
        console.log("Saved schedule found!");
        storeSchedule = JSON.parse(localSchedule);
    }

    for (let i = 0; i < timeArray.length; i++) {

        var scheduleDiv = $("<div>");
        scheduleDiv.addClass("row");
        scheduleDiv.attr("id", timeArray[i]);

        var timeDiv = $("<div>");
        timeDiv.addClass("hour");
        timeDiv.html(timeArray[i]);

        var textDiv = $("<div>");
        textDiv.addClass("time-block");

        if ((i + 9) < moment().format("HH")) {
            textDiv.addClass("past");
        } else if ((i + 9) > moment().format("HH")) {
            textDiv.addClass("future");
        } else {
            textDiv.addClass("present");
        }

        var textInput = $("<textarea>");
        textInput.addClass("textarea description");
        textInput.attr("id", timeArray[i] + "TextArea");
        // checking in schedule array to find if entry with hour already exists 

        var saveButton = $("<button>");
        saveButton.addClass("saveBtn");
        saveButton.attr("id", "save");

        var saveIcon = $("<i>");
        saveIcon.addClass("fas fa-save");

        scheduleDiv.append(timeDiv);
        scheduleDiv.append(textDiv);
        textDiv.append(textInput);
        scheduleDiv.append(saveButton);
        saveButton.append(saveIcon);
        $("#schedule").append(scheduleDiv);

        if (storeSchedule["schedule"].findIndex(selectedHour => selectedHour.hour === timeArray[i]) != -1) {
            console.log("There is an entry for this time already!");
            var index = storeSchedule["schedule"].findIndex(selectedHour => selectedHour.hour === timeArray[i]);
            $('#' + timeArray[i]+'TextArea').val(storeSchedule["schedule"][index].meeting);
        };

    };

    $(document).on('click', '#save', function () {
        console.log("Button clicked at ");
        var hour = $(this).parent().attr("id");
        var meetingText = $(this).parent().find("textarea").val();

        if (storeSchedule["schedule"].findIndex(selectedHour => selectedHour.hour === hour) != -1) {
            // check each element to find index of hour
            var index = storeSchedule["schedule"].findIndex(selectedHour => selectedHour.hour === hour);
            // remove stored data...
            console.log("removing stored data...");
            storeSchedule["schedule"].remove(index)
        }
        //...then replace with new data
        console.log("replacing stored data...");
        storeSchedule["schedule"].push({ "hour": hour, "meeting": meetingText });
        localStorage.setItem("schedule", JSON.stringify(storeSchedule));
    });
}

loadPage();