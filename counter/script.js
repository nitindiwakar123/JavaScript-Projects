const wrapper = document.querySelector('.wrapper');
const output = document.querySelector('#output');
const decrease = document.querySelector('#btn-1');
const reset = document.querySelector('#btn-2');
const increase = document.querySelector('#btn-3');
const buttons = document.querySelector('.buttons');


let count = 0;

buttons.addEventListener('click', function (e) {
    const id = e.target.id;
    if (id === 'decrease') {
        count--;
    }
    else if (id === 'increase') {
        count++;
    }
    else {
        count = 0;
    }

    if (count < 0) {
        output.style.color = 'red';
    }
    else if (count > 0) {
        output.style.color = 'green';
    }
    if (count === 0) {
        output.style.color = 'white';
    }
    output.innerHTML = count;
}, false)



