const textareaEl = document.querySelector('#textarea');
const totalCounterEl = document.querySelector('#total-counter');
const remainingCounterEl = document.querySelector('#remaining-counter');

const maxCount = 50;

const count = (e) => {
    const textLength = textareaEl.value.length;
    const remainingCount = maxCount - textLength;

    totalCounterEl.innerText = textLength;
    remainingCounterEl.innerText = remainingCount >= 0 ? remainingCount : 0;
}

textareaEl.addEventListener('keyup', count);

count();