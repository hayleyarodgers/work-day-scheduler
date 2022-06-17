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
// var currentHour = parseInt(currentTime.format('H'));

var currentHour = 11;

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

// Add event to local storage when save button clicked
function saveEvent(event) {
    var buttonClicked = $(event.target);

    var selectedTimeBlock = buttonClicked.closest('.time-block');
    var selectedTimeblockTextarea = selectedTimeBlock.children('textarea');

    var eventID = selectedTimeblockTextarea.attr("id");
    var eventDescription = selectedTimeblockTextarea.val();

    localStorage.setItem(eventID, JSON.stringify(eventDescription));
    
    var messageEl = $('#message');
    messageEl.text('Appointment added to local storage ✓');
}

var saveButtons = $('.fas');
saveButtons.on('click', saveEvent);

// When page loads, check local storage for events and print on page

function showSavedEvents() {

}

window.onload = showSavedEvents();