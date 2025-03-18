const counterEl = document.querySelector('.counter');
const loadingBarBack = document.querySelector('.loading-bar-back');
const loadingBarFront = document.querySelector('.loading-bar-front');
let counter = 0;
let interval = setInterval(() => {
    counter++;
    counterEl.innerText = `${counter}%`
    loadingBarFront.style.width = `${counter}%`

    if (counter === 100) {
        clearInterval(interval)
    }
    console.log(counter);

}, 20);

