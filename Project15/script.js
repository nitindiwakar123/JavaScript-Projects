const stopwatch = document.querySelector('#stopwatch');
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

const formatTimeWithMiliseconds = (hours, minutes, seconds, miliseconds) => {
    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}:${String(miliseconds).padStart(2, 0)}`;
}
const formatTimeWithoutMiliseconds = (hours, minutes, seconds) => {
    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
}

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

stopwatch.innerText = formatTimeWithoutMiliseconds(hours, minutes, seconds);

const startTime = () => {
    if (hours == 23 && minutes == 59 && seconds == 59 && miliseconds == 99) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        miliseconds = 0;

        stopwatch.innerText = formatTimeWithMiliseconds(hours, minutes, seconds, miliseconds);
    }
    else {
        if (minutes == 59 && seconds == 59 && miliseconds == 99) {
            hours++;
            minutes = 0;
            seconds = 0;
            miliseconds = 0;
        }
        else if (seconds == 59 && miliseconds == 99) {
            minutes++;
            seconds = 0;
            miliseconds = 0;
        }
        else if (miliseconds == 99) {
            seconds++;
            miliseconds = 0;
        }
        else {
            miliseconds++;
        }
        stopwatch.innerText = formatTimeWithMiliseconds(hours, minutes, seconds, miliseconds);
    }
}

start.addEventListener('click', function (e) {
    interval = setInterval(startTime, 10);
    start.setAttribute('disabled', "");

    stop.removeAttribute('disabled');

}, false)

stop.addEventListener('click', function (e) {
    clearInterval(interval);
    stop.setAttribute('disabled', "");
    start.removeAttribute('disabled');
}, false)

reset.addEventListener('click', function (e) {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    stopwatch.innerText = formatTimeWithoutMiliseconds(hours, minutes, seconds);
    stop.setAttribute('disabled', "");
    start.removeAttribute('disabled');
}, false)