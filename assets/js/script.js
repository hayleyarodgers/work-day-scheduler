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

var descriptionEl = $('#description');

var currentHour = currentTime.format('H');
var rowHour = descriptionEl.data('hour');

console.log(currentHour);
console.log(rowHour);

if (rowHour < currentHour) {
    descriptionEl.addClass('past');
} else if (rowHour = currentHour) {
    descriptionEl.addClass('present');
} else {
    descriptionEl.addClass('future');
};


// Add event to local storage