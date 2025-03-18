const pBottomEl = document.querySelector('#pbottom');
const timerValueEl = document.querySelector('#timer-val');
const hitValueEl = document.querySelector('#hit-val');
const scoreValueEl = document.querySelector('#score-val');
const highScoreValueEl = document.querySelector('#high-score');
const restartButtonEl = document.querySelector('#restart');

let timer = 60;
let score = 0;
let hitNum = 0;
let localHigh = getHighScore() || 0;
let highScore = localHigh;
let playGame = true;

highScoreValueEl.innerText = `High Score: ${highScore}`;

const increaseScore = () => {
    score += 10;
    scoreValueEl.innerText = score;

    if (score > highScore) {
        highScore = score;
        highScoreValueEl.innerText = `High Score: ${highScore}`;
        setHighScore();
    }
}

const getNewHit = () => {
    hitNum = Math.floor(Math.random() * 10);
    hitValueEl.innerText = hitNum;
}

const makeBubbles = () => {
    let bubbles = "";

    for (let i = 1; i <= 75; i++) {
        bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    pBottomEl.innerHTML = bubbles;
}

const startTimer = () => {
    let interval = setInterval(() => {
        if (timer > 0) {
            timer -= 1;
        }
        else {
            timer = 0;
            clearInterval(interval);
            pBottomEl.classList.add('over');
            pBottomEl.innerHTML = "Game Over!";
            playGame = false;

        }
        timerValueEl.innerText = timer;
    }, 1000);
}

const setHighScore = () => {
    localStorage.setItem("high", JSON.stringify(highScore));
}

function getHighScore() {
    return JSON.parse(localStorage.getItem("high"));
}

if (playGame) {

    pBottomEl.addEventListener('click', (e) => {
        if (!playGame) return;
        let clickedNum = Number(e.target.innerText);
        if (clickedNum === hitNum) {
            increaseScore();
            getNewHit();
            makeBubbles();
        }
    }, false);
}

restartButtonEl.addEventListener('click', () => {
    playGame = true;
    timer = 60;
    startTimer();
    getNewHit();
    makeBubbles();
    timerValueEl.innerText = timer;

});

startTimer();
makeBubbles();
getNewHit();