const qeustionEl = document.querySelector('.question');
const quizContainerEl = document.querySelector('.quiz-container');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const optionsEl = document.querySelectorAll('.opt');
const optionsContainerEl = document.querySelector('.optionsContainer');
const optionsRadio = document.querySelectorAll('.option');

const questions = [
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "threre is a",
        options: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "How are you",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
];


let count = 0;
let score = 0;
updateQeustion()

function updateQeustion() {

    optionsContainerEl.reset();
    console.log("hello");
    console.log(count);
    let answer = questions[count].answer;
    qeustionEl.innerText = questions[count].question;
    const allOptions = questions[count].options;
    optionsEl[0].innerText = allOptions[0];
    optionsEl[1].innerText = allOptions[1];
    optionsEl[2].innerText = allOptions[2];
    optionsEl[3].innerText = allOptions[3];

    optionsContainerEl.addEventListener('change', getAnswer);

    function getAnswer(e) {
        e.preventDefault();
        let optionTextEl = e.target.nextElementSibling;
        if (optionTextEl.innerText == answer) {
            score++;
            console.log(score);
        }
        else {
            console.log("wrong");
        }
        optionsContainerEl.removeEventListener('change', getAnswer);

    }
}

function correctAnswer() {
    const quizContainerEl = document.querySelector('.quiz-container');
    const checkEl = document.createElement('div');
    checkEl.classList.add('fas', 'fa-check');
    quizContainerEl.appendChild(checkEl);
}

function wrongAnswer() {
    const quizContainerEl = document.querySelector('.quiz-container');
    const checkEl = document.createElement('div');
    checkEl.classList.add('fas', 'fa-remove');
    quizContainerEl.appendChild(checkEl);
}

nextBtn.addEventListener('click', () => {
    if (count < 10) {
        count++;
    }
    updateQeustion();
})
prevBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
    }
    updateQeustion();
})