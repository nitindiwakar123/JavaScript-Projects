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

// const boxes = document.querySelectorAll('.box');
// const resetButtonEl = document.querySelector('#reset-btn');
// const resultEl = document.querySelector('#result');
// const mainEl = document.querySelector('main');

// let boxCounter = 0;
// let turnO = true;
// let gameActive = true;  // Added to manage game state

// const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// const getComputerMove = () => {
//     const emptyBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     if (emptyBoxes.length === 0) {
//         return null;
//     }
//     const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
//     return randomBox;
// };

// const handleClick = (box) => {
//     if (!gameActive || box.innerText !== "") return;

//     box.innerText = "O";
//     box.disabled = true;
//     boxCounter++;
//     checkWinner();
//     if (gameActive && boxCounter < 9) {
//         setTimeout(() => {
//             const computerBox = getComputerMove();
//             if (computerBox) {
//                 computerBox.innerText = "X";
//                 computerBox.disabled = true;
//                 boxCounter++;
//                 checkWinner();
//             }
//         }, 500);
//     }
//     turnO = !turnO;
// };

// boxes.forEach((box) => {
//     box.addEventListener('click', () => handleClick(box));
// });

// const resetGame = () => {
//     turnO = true;
//     boxCounter = 0;
//     gameActive = true;  // Reset game state
//     boxes.forEach((box) => {
//         box.disabled = false;
//         box.innerText = "";
//     });
//     resultEl.innerText = "";
//     const newGameBtn = document.getElementById('new-game');
//     if (newGameBtn) newGameBtn.remove();
// };

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         const [a, b, c] = pattern;
//         if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
//             resultEl.innerText = `Winner: ${boxes[a].innerText}`;
//             disableBoxes();
//             endGame();
//             gameActive = false;  // Stop further moves
//             return;
//         }
//     }

//     if (boxCounter === 9) {
//         resultEl.innerText = "It's a Draw";
//         endGame();
//     }
// };

// const disableBoxes = () => {
//     boxes.forEach((box) => {
//         box.disabled = true;
//     });
// };

// const endGame = () => {
//     resetButtonEl.disabled = true;
//     const newGameBtn = document.createElement('button');
//     newGameBtn.classList.add('btn');
//     newGameBtn.id = "new-game";
//     newGameBtn.innerText = "Start New Game";
//     mainEl.appendChild(newGameBtn);
//     newGameBtn.addEventListener('click', () => {
//         resetButtonEl.disabled = false;
//         resetGame();
//     });
// };

// resetButtonEl.addEventListener('click', resetGame);
