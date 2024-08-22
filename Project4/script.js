let randomNumber = parseInt(Math.random() * 100 + 1);
const form = document.querySelector('.form');
const guessField = document.querySelector('#guessField');
const button = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    let guess = parseInt(guessField.value);
    // console.log(guess);
    checkValid(guess);
  });
}

const checkValid = (guess) => {
  if (isNaN(guess)) {
    display(`Invalid Number! ${guess}`);
  } else if (guess <= 0) {
    display(`Please Enter a Number More than 1!`);
  } else if (guess > 100) {
    display(`Please Enter a Number Less than 100!`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      cleanGuess(guess);
      display(`Game Over The Random Number is ${randomNumber}`);
      endGame();
    } else {
      cleanGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    display(`You Guessed it Right! ${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    display(`Guess is Too Low!`);
  } else if (guess > randomNumber) {
    display(`Guess is Too High!`);
  }
};

const cleanGuess = (guess) => {
  guessField.value = '';
  guesses.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

const display = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  guessField.value = '';
  guessField.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    guessField.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
};
