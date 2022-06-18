/* JS DIRECTORY
    1. =VARIABLES
    2. =APPEARANCE
    3. =STORING-EVENTS
*/

/* ===VARIABLES=== */

// Section element variables
var currentDayEl = $('#currentDay');
var messageEl = $('#message');
var descriptionEls = $('.description');
var saveButtons = $('.fas');

// Time-related variables
var currentTime = moment();
var currentDay = currentTime.format('dddd, MMMM Do');
var currentHour = parseInt(currentTime.format('H'));


/* ===APPEARANCE=== */

// Display current day at top of calendar
currentDayEl.text(currentDay);

// Display coloured time-blocks with any saved events
for (var i = 0; i < descriptionEls.length; i++) {
    var descriptionEl = descriptionEls[i];

    setColour();
    showSavedEvents();
}

// Set colour of each timeblock based on current time
function setColour() {
    var rowHour = parseInt(descriptionEl.dataset.hour);

    if (rowHour < currentHour) {
        descriptionEl.classList.add('past');
    } else if (rowHour === currentHour) {
        descriptionEl.classList.add('present');
    } else if (rowHour > currentHour) {
        descriptionEl.classList.add('future');
    };
}

// Display any previously saved events
function showSavedEvents() {
    var descriptionID = descriptionEl.id;
    var savedDescription = JSON.parse(localStorage.getItem(descriptionID));

    if (savedDescription !== null) {
        descriptionEl.textContent = savedDescription;
    }
}


/* ===STORING-EVENTS=== */

// Add event to local storage when save button clicked
function saveEvent(event) {
    var buttonClicked = $(event.target);
    var selectedTimeBlock = buttonClicked.closest('.time-block');
    var selectedTimeblockTextarea = selectedTimeBlock.children('textarea');
    var eventID = selectedTimeblockTextarea.attr('id');
    var eventDescription = selectedTimeblockTextarea.val();

    localStorage.setItem(eventID, JSON.stringify(eventDescription));

    showMessage();
}

saveButtons.on('click', saveEvent);

// Show five-second long message to say event has been saved
function showMessage() {
    messageEl.text('Appointment added to local storage ✓');

    setTimeout(function() {
        messageEl.text('');
    }, 5000);
}

// Clear local storage between end of one day and start of another
function clearLocalStorage() {
    if (currentHour >= 18 || currentHour < 7) {
        localStorage.clear();
    }
}

clearLocalStorage();