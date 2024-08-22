const insert = document.querySelector('.insert');
const value1 = document.querySelector('#value1')
const value2 = document.querySelector('#value2')
const value3 = document.querySelector('#value3')

window.addEventListener('keydown', (e) => {
    value1.innerHTML = e.key === " "? "Space": e.key;
    value2.innerHTML = e.keyCode;
    value3.innerHTML = e.code
})