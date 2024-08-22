const monthEl = document.querySelector('#month-name');
const dayEl = document.querySelector('#day-name');
const dayNumberEl = document.querySelector('#day-number');
const yearEl = document.querySelector('#year');

const date = new Date();

monthEl.innerText = date.toLocaleString("en", {
    month: "long"
});
dayEl.innerText = date.toLocaleString("en", {
    weekday: "long"
});
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();

