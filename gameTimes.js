// Find all elements with the class "game-time"
const gameTimes = document.querySelectorAll('.game-time');

// Loop through each game time element
gameTimes.forEach(timeElement => {
    // Get the UTC time from the data attribute
    const utcTime = timeElement.getAttribute('data-utc-time');
    // Convert UTC time to local time
    const localTime = new Date(utcTime).toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric', timeZoneName: 'short'});
    // Set the inner HTML of the element to the local time
    timeElement.innerHTML = localTime;
});
