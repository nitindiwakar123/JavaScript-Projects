const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const reset = document.querySelector('#reset');

const colors = {
    teal: '#008080',
    charcoal: '#36454F',
    blue: '#191970',
    green: '#228B22'
}

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const color = colors[e.target.id];
        if (color) {
            body.style.backgroundColor = color;
        }
    })
})

reset.addEventListener('click', function (e) {

    body.style.backgroundColor = 'black';
})
