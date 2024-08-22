const buttons = document.querySelectorAll('button');
const initialResultEl = document.querySelector('#initialResult');
const finalResultEl = document.querySelector('#finalResult');
const userScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');
const yourChoiceEl = document.querySelector('#user-choice');
const compChoiceEl = document.querySelector('#computer-choice');
const newGameEl = document.querySelector('#newGame');
const remainingEl = document.querySelector('#remaining');

let chances = 3;
let playgame = true;
let userScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

if (playgame) {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let computerChoice = Math.floor(Math.random() * 3);
            let userchoice = choices.indexOf(e.target.id);

            checkChoices(userchoice, computerChoice);
            chances--;
            remainingEl.innerText = `Remaining chances: ${chances}`;

            if (chances == 0) {
                showFinalResult();
                endGame();
            }
        });
    })
}

const checkChoices = (userchoice, computerChoice) => {

    if (userchoice === computerChoice) {
        userScore++;
        computerScore++;
        initialResultEl.innerText = "It's a tie!";
    }
    else if (userchoice == 0 && computerChoice == 1) {

        computerScore++;
        initialResultEl.innerText = "Paper beats rock!";
    }
    else if (userchoice == 0 && computerChoice == 2) {

        userScore++;
        initialResultEl.innerText = "rock beats scissors!";
    }
    else if (userchoice == 1 && computerChoice == 0) {

        userScore++;
        initialResultEl.innerText = "Paper beats rock!";
    }
    else if (userchoice == 1 && computerChoice == 2) {

        computerScore++;
        initialResultEl.innerText = "scissors beats paper!";
    }
    else if (userchoice == 2 && computerChoice == 0) {

        computerScore++;
        initialResultEl.innerText = "rock beats scissors!";
    }
    else if (userchoice == 2 && computerChoice == 1) {

        userScore++;
        initialResultEl.innerText = "scissors beats paper!";
    }

    yourChoiceEl.innerHTML = choices[userchoice];
    compChoiceEl.innerHTML = choices[computerChoice];
    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = computerScore;
}

const showFinalResult = () => {
    if (userScore == computerScore) {
        finalResultEl.innerText = "Game over! draw";
    }
    else if (userScore > computerScore) {
        finalResultEl.innerText = "Game over! you win";
    }
    else {
        finalResultEl.innerText = "Game over! you lose"
    }
}

const endGame = () => {
    buttons.forEach((button) => {
        button.setAttribute("disabled", "");
    })
    playgame = false;
    newGame();
}

const newGame = () => {
    const span = document.createElement('span');
    span.setAttribute("id", 'new-game');
    span.innerText = "Start new game";
    newGameEl.appendChild(span);

    span.addEventListener('click', (e) => {
        buttons.forEach((button) => {
            button.removeAttribute("disabled");
        })
        playgame = true;
        chances = 3;
        finalResultEl.innerText = "";
        userScoreEl.innerText = "0";
        computerScoreEl.innerText = "0";
        yourChoiceEl.innerText = "";
        compChoiceEl.innerText = "";
        initialResultEl.innerText = "";
        remainingEl.innerText = "Remaining chances: 3";
        userScore = 0;
        computerScore = 0;
        newGameEl.removeChild(span);
    })
}


