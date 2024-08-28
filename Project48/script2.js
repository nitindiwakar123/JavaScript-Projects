const boxes = document.querySelectorAll('.box');
const resetButtonEl = document.querySelector('#reset-btn');
const resultEl = document.querySelector('#result');
const mainEl = document.querySelector('main');

let boxCounter = 0;
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    if (turnO) {
        box.addEventListener('click', () => {
            box.innerText = "O";
            turnO = false;
        })
    }
    else {
        console.log("hello");
    }
})
