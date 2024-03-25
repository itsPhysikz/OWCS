// Array of game times in UTC
const gameTimesUTC = [
    '2024-04-05T16:00:00Z',
    '2024-04-05T24:00:00Z',
];

// Loop through each game time
gameTimesUTC.forEach((time, index) => {
    const d = new Date(time);
    const localTime = d.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric', timeZoneName: "short"});
    document.getElementById(`game${index}`).innerHTML = localTime;
});