const boxes = document.querySelectorAll('.box');
const resetButtonEl = document.querySelector('#reset-btn'); // Corrected typo
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
    box.addEventListener('click', (e) => {
        console.log("box clicked");

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        boxCounter++;
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    boxCounter = 0; // Reset boxCounter
    enableBoxes();
    resultEl.innerText = "";
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const posiVal1 = boxes[pattern[0]].innerText;
        const posiVal2 = boxes[pattern[1]].innerText;
        const posiVal3 = boxes[pattern[2]].innerText;

        if (posiVal1 !== "" && posiVal2 !== "" && posiVal3 !== "") {
            if (posiVal1 === posiVal2 && posiVal2 === posiVal3) {
                console.log(posiVal1, posiVal2, posiVal3);

                console.log("winner", posiVal1);
                resultEl.innerText = `Winner: ${posiVal1}`;
                disableBoxes();
                endGame();
                return; // Exit if a winner is found
            }
        }
    }

    if (boxCounter === 9) { // Draw condition checked after winner check
        resultEl.innerText = "It's a Draw";
        endGame();
    }
}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

const endGame = () => {
    resetButtonEl.disabled = true; // Corrected typo
    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('btn');
    newGameBtn.id = "new-game";
    newGameBtn.innerText = "Start New Game";
    mainEl.appendChild(newGameBtn);
    newGame();
}

const newGame = () => {
    const newGameBtn = document.getElementById('new-game');
    newGameBtn.addEventListener('click', () => {
        resetButtonEl.disabled = false; // Corrected typo
        resetGame();
        newGameBtn.remove();
    });
}

resetButtonEl.addEventListener('click', () => { // Corrected typo
    resetGame();
});
