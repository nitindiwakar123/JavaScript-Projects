const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let interval;

const startChangingColor = () => {
    if (interval == null) {
        interval = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
        }, 1000)
    }

}

const stopChangingColor = () => {
    clearInterval(interval);
    interval = null;
}
// console.log(randomColor());
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', startChangingColor)
stop.addEventListener('click', stopChangingColor)
