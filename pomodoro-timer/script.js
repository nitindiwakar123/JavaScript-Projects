const timeDiv = document.querySelector('.time');
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset');

function formatTime(minutes, seconds) {
    return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

// Initial time in minutes and seconds
let minutes = 25;
let seconds = 0;
let timerInterval;


timeDiv.innerText = formatTime(minutes, seconds);;

const timer = () => {
    if (minutes == 0 && seconds === 0) {
        clearInterval(timerInterval);
        alert('Time is Over!');
    }
    else {
        if (seconds == 0) {
            minutes--;
            seconds = 59;
        }
        else {
            seconds--;
        }
        timeDiv.innerText = formatTime(minutes, seconds);
    }
}

start.addEventListener('click', function (e) {
    timerInterval = setInterval(timer, 1000);
});

stop.addEventListener('click', function (e) {
    clearInterval(timerInterval);
});

reset.addEventListener('click', function (e) {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    timeDiv.innerText = formatTime(minutes, seconds);
});