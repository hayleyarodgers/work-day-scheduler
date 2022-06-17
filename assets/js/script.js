/* JS DIRECTORY
    1. =
    2. =
    3. =
    4. =
    5. =
*/


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

    if (rowHour < currentHour) {
        descriptionEl.classList.add("past");
    } else if (rowHour === currentHour) {
        descriptionEl.classList.add("present");
    } else if (rowHour > currentHour) {
        descriptionEl.classList.add("future");
    };
}

// Add event to local storage
var saveButtons = $('.saveBtn');

function saveEvents() {

}

saveButtons.on('click', saveEvents());

// When page loads, check local storage for events and print on page

function showSavedEvents() {

}

window.on('load', showSavedEvents());

