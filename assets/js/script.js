/* JS DIRECTORY
    1. =
    2. =
    3. =
    4. =
    5. =
*/

// 
var currentTime = moment();

// Display current date at top of calendar
var currentDayEl = $('#currentDay');
var currentDay = currentTime.format('dddd, MMMM Do');
currentDayEl.text(currentDay);

// Set colour of timeblock based on current time

var descriptionEls = $('.description');

var currentHour = parseInt(currentTime.format('H'));

for (var i = 0; i < descriptionEls.length; i++) {
    var descriptionEl = descriptionEls[i];

    var rowHour = parseInt(descriptionEl.dataset.hour);

    console.log(rowHour);
    console.log(currentHour);

    if (rowHour < currentHour) {
        descriptionEl.addClass('past');
        console.log("past");
    } else if (rowHour = currentHour) {
        descriptionEl.addClass('present');
        console.log("present");
    } else if (rowHour > currentHour) {
        descriptionEl.addClass('future');
        console.log("future");
    };
}



// Add event to local storage