const dateEl = document.querySelector('.date');
const daysEl = document.querySelector('.days');

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getStartDay(month, year) {
    let startDay = new Date(year, month, 1).getDay();
    return (startDay === 0) ? 6 : startDay - 1;
}

function generateDays() {
    let totalDays = getDaysInMonth(currentMonth, currentYear);
    let startDay = getStartDay(currentMonth, currentYear);

    for (let i = 0; i < startDay; i++) {
        const emptyEl = document.createElement('div');
        emptyEl.classList.add('empty');
        daysEl.appendChild(emptyEl);
    }
    for (let i = 1; i <= totalDays; i++) {
        const dayEl = document.createElement('div');
        dayEl.innerText = i;
        if (currentDate.getDate() == i) {
            dayEl.classList.add('today');
        }
        daysEl.appendChild(dayEl);
    }
}

function displayCurrentDate() {
    const h1 = dateEl.querySelector('h1');
    const p = dateEl.querySelector('p');

    h1.innerText = currentDate.toLocaleString("en", {
        month: "long"
    })

    p.innerText = currentDate.toDateString();
}

displayCurrentDate();
generateDays();

