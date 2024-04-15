// Get all elements with the class 'date-time'
var matchTimeElements = document.querySelectorAll('.match-time');

// Iterate over each element
matchTimeElements.forEach(function(element) {
    // Get the UTC time string from the 'data-utc' attribute
    var utcTimeString = element.getAttribute('data-utc');

    // Create a new Date object from the UTC time string
    var utcDate = new Date(utcTimeString);

    // Convert UTC time to local time
    var localTime = utcDate.toLocaleTimeString(undefined, {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'});

    // Update the element with the local time
    element.textContent = localTime;
});
 