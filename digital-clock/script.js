const clock = document.querySelector('#clock');


setInterval(function () {
    let date = new Date();
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour format to remove AM/PM
    };
    let timeString = date.toLocaleTimeString('en-US', options);
    clock.innerHTML = timeString.replace(/:/g, ' : ');
}, 1000)