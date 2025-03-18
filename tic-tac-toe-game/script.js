const boxes = document.querySelectorAll('.box');
const resetButtonEl = document.querySelector('#reset-btn'); // Corrected typo
const resultEl = document.querySelector('#result');
const mainEl = document.querySelector('main');

let boxCounter = 0;
let turnO = true;
let gameActive = true;
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

const getComputerMove = () => {
    const emptyBoxes = Array.from(boxes).filter(box => box.innerText === "");

    if (emptyBoxes.length === 0) {
        return;
    }

    const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    return randomBox;
}

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (!gameActive || box.innerText !== "") return;

        box.innerText = "O";
        turnO = false;
        boxCounter++;
        box.disabled = true;
        checkWinner();

        if (gameActive && boxCounter < 9) {
            setTimeout(() => {
                const computerBox = getComputerMove();
                if (computerBox) {
                    computerBox.innerText = "X";
                    computerBox.disabled = true;
                    boxCounter++;
                    turnO = true;
                    checkWinner();
                }
            }, 500);
        }
        turnO = !turnO;
    });
});

const resetGame = () => {
    turnO = true;
    gameActive = true;
    boxCounter = 0; // Reset boxCounter
    enableBoxes();
    resultEl.innerText = "";
}

const checkWinner = () => {
    if (resultEl.innerText != "") return;

    for (let pattern of winPatterns) {
        const posiVal1 = boxes[pattern[0]].innerText;
        const posiVal2 = boxes[pattern[1]].innerText;
        const posiVal3 = boxes[pattern[2]].innerText;

        if (posiVal1 !== "" && posiVal2 !== "" && posiVal3 !== "") {
            if (posiVal1 === posiVal2 && posiVal2 === posiVal3) {

                resultEl.innerText = `Winner: ${posiVal1}`;
                disableBoxes();
                endGame();
                gameActive = false;
                return
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
    newGameBtn.addEventListener('click', () => {
        resetButtonEl.disabled = false; // Corrected typo
        resetGame();
        newGameBtn.remove();
    });
}
   
resetButtonEl.addEventListener('click', () => { // Corrected typo
    resetGame();
});


