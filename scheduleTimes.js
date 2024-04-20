// Get the current time
var currentTime = new Date();

// Get all elements with the class 'match'
var matches = document.querySelectorAll('.match');

// Iterate over each match
matches.forEach(function(match) {
    // Get the match time element within the match
    var matchTimeElement = match.querySelector('.match-time');
    
    // Get the UTC time string from the 'data-utc' attribute of the match time element
    var utcTimeString = matchTimeElement.getAttribute('data-utc');

    // Create a new Date object from the UTC time string
    var utcDate = new Date(utcTimeString);

    // Add one hour to the match time
    var matchTimePlusOneHour = new Date(utcDate.getTime() + 60 * 60 * 1000);

    // Check if the current time is more than an hour past the match time
    if (currentTime > matchTimePlusOneHour) {
        // Hide the entire match
        match.style.display = 'none';
    } else {
        // Convert UTC time to local time
        var localTime = utcDate.toLocaleTimeString(undefined, {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'});

        // Update the match time element with the local time
        matchTimeElement.textContent = localTime;
    }
});
