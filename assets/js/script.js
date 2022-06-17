/* JS DIRECTORY
    1. =
    2. =
    3. =
    4. =
    5. =
*/


var currentTime = moment();
var currentHour = parseInt(currentTime.format('H'));

// Display current date at top of calendar
var currentDayEl = $('#currentDay');
var currentDay = currentTime.format('dddd, MMMM Do');
currentDayEl.text(currentDay);

// Set colour of timeblock based on current time
var descriptionEls = $('.description');

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
    for (var i = 0; i < descriptionEls.length; i++) {
        var descriptionEl = descriptionEls[i];
        var descriptionID = descriptionEl.id;
        var savedDescription = JSON.parse(localStorage.getItem(descriptionID));

        if (savedDescription !== null) {
            descriptionEl.textContent = savedDescription;
        }
    }
}

window.onload = showSavedEvents();

// Clear local storage between end of one day and start of another
function clearLocalStorage() {
    if (currentHour >= 18 || currentHour < 9) {
        localStorage.clear();
    }
}

clearLocalStorage();