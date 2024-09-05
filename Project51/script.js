const gameContainerEl = document.querySelector('.gameContainer');
const backgroundEl = document.querySelector('.background');
const kangaroo = document.querySelector('.kangaroo');
const obstacle = document.querySelector('.obstacle');
const scoreCountEl = document.querySelector('#scoreCount');
const highScoreEl = document.querySelector('#highScore');
const gameOverEl = document.querySelector('.gameOver');

let score = 0;
let highScore = getHighScore();
let cross = true;

const audioGo = new Audio('assets/music.mp3');
const audioGameOver = new Audio('assets/gameover.mp3');

updateHighScore(highScore);
changeBackground();

audioGo.play();

const moveKangaroo = (e) => {
    audioGo.play();
    console.log("keycode: ", e.keyCode);
    document.querySelector('h1').style.display = "none";
    if (e.keyCode === 38) {

        kangaroo.classList.add('kangaroo-jump');
        setTimeout(() => {
            kangaroo.classList.remove('kangaroo-jump');
        }, 700);
    }
    else if (e.keyCode === 39) {
        let kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
        kangaroo.style.left = `${kangarooX + 120}px`;
    }
    else if (e.keyCode === 37) {
        let kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
        kangaroo.style.left = `${kangarooX - 120}px`;
    }
}

window.addEventListener('keydown', moveKangaroo);


setInterval(() => {
    let kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
    let kangarooY = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('top'));

    let obstacleX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let obstacleY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    let offsetX = Math.abs(kangarooX - obstacleX);
    let offsetY = Math.abs(kangarooY - obstacleY);

    if (offsetX < 60 && offsetY < 52) {
        obstacle.style.left = `${obstacleX}px`;
        window.removeEventListener('keydown', moveKangaroo);
        gameOverEl.style.visibility = 'visible';
        backgroundEl.classList.remove('moveBg');
        endGame();
    }
    else if (offsetX < 145 && cross) {
        score++;
        if (score > highScore) {
            highScore++;
            updateHighScore(highScore);
            saveHighScore(highScore);
        }
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        let obstacleAniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));

        setTimeout(() => {
            if (obstacleAniDur > 1.0) {
                let newObstacleAniDur = obstacleAniDur - 0.01;
                obstacle.style.animationDuration = `${newObstacleAniDur}s`;
            }
            else {
                obstacle.style.animationDuration = `${obstacleAniDur}s`;
            }

        }, 1000);

    }

    if (obstacleX > 1350) {
        obstacle.querySelector('img').src = `assets/obstacle${Math.floor(Math.random() * 3 + 1)}.png`;

    }
}, 100);


function changeBackground() {
    // Preload images
    const bgImages = [];
    for (let i = 1; i <= 8; i++) {
        const img = new Image();
        img.src = `assets/backgrounds/bg${i}.png`;
        bgImages.push(img);
    }

    // Change the background every 10 seconds
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * 8);
        backgroundEl.style.backgroundImage = `url(${bgImages[randomIndex].src})`;
    }, 20000);

}

function updateScore(score) {
    scoreCountEl.innerText = `Your Score: ${score}`;

}

function updateHighScore(highScore) {
    highScoreEl.innerText = `High Score: ${highScore}`;
}

function saveHighScore(highScore) {
    localStorage.setItem("highScore", JSON.stringify(highScore));
}

function getHighScore() {
    return JSON.parse(localStorage.getItem("highScore") || 0);
}

function endGame() {
    audioGameOver.play();
    obstacle.classList.remove('obstacleAni');
    setTimeout(() => {
        audioGameOver.pause();
        audioGo.pause();
    }, 1000);
    const newGame = document.querySelector('.newGame');
    newGame.addEventListener('click', () => {
        restartGame();
    })
}

function restartGame() {
    score = 0;
    cross = true;
    updateScore(score);
    window.addEventListener('keydown', moveKangaroo);
    backgroundEl.classList.add('moveBg');
    gameOverEl.style.visibility = 'hidden';
    obstacle.classList.add('obstacleAni');
    obstacle.style.animationDuration = "5s";
}