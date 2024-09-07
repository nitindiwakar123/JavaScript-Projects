const progressContainerEl = document.querySelector('.progress-container');
const progressBarFrontEl = document.querySelector('.progress-bar-front');
const stepEl = document.querySelectorAll('.step');
const questionEl = document.querySelector('.question');
const quizContainerEl = document.querySelector('.quiz-container');
const nextBtn = document.querySelector('#next');
const optionsContainerEl = document.querySelector('.optionsContainer');


const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Wordsworth", "Charles Dickens", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let count = 0;
let score = 0;

updateQuestion()

function updateQuestion() {

    optionsContainerEl.innerHTML = "";

    console.log(`Count: ${count}`);

    if (count < stepEl.length) {
        const questionObj = questions[count];
        const question = questionObj.question;
        questionEl.innerText = question;
        const allOptions = questionObj.options;


        allOptions.forEach((option, index) => {
            const p = document.createElement('p');
            p.innerHTML = `<input type="radio" name="option" class="option" id="option${index}">
                       <label for="option${index}" class="opt">${option}</label>`;
            optionsContainerEl.appendChild(p);

        });
    }
    else {
        questionEl.innerText = "";
        optionsContainerEl.innerHTML = "";
    }

}


const updateStepProgress = () => {
    stepEl.forEach((step, idx) => {
        if (idx <= count) {
            step.classList.add("checked");
            step.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${idx === 0
                    ? "Start"
                    : idx === stepEl.length - 1
                        ? "Final"
                        : "Question " + (idx + 1)
                }</small>
            `;
        }
        else {
            step.classList.remove("checked");
            step.innerHTML = `<i class="fas fa-times"></i>`;
        }
    })

    const checkedNumber = document.querySelectorAll(".checked");

    progressBarFrontEl.style.width = ((checkedNumber.length - 1) / (stepEl.length - 1)) * 100 + "%";


    if (count === stepEl.length - 1) {
        nextBtn.innerText = "Submit";
    }
    else {
        nextBtn.disabled = false;
    }
}


function getAnswer(e) {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {

        const selectedValue = selectedOption.nextElementSibling.innerText;
        console.log(`Selected Option: ${selectedValue}, Correct Option: ${questions[count].answer}`);

        if (selectedValue === questions[count].answer) {
            score++;
            console.log(`Correct: Score: ${score}`);
        }
        else {
            console.log("wrong");

        }
    }
    else {
        const warning = confirm("Please select an option!");
        if (warning) {
            return;
        }
    }

    count++;
    if (count > stepEl.length) {
        count = stepEl.length;
    }
    updateQuestion();
    updateStepProgress();
}

function getResult() {
    progressContainerEl.style.display = "none";
    quizContainerEl.style.display = "none";
    nextBtn.style.display = "none";
    const resultContainerEl = document.querySelector('.resultContainer');
    const scoreEl = document.createElement('h2');
    scoreEl.innerText = `Correct Answers: ${score}/${questions.length}`;
    const PercentageEl = document.createElement('div');
    PercentageEl.classList.add('percentageContainer');
    const percentage = (score / questions.length) * 100;
    PercentageEl.innerText = `${percentage}%`;

    resultContainerEl.appendChild(PercentageEl);
    resultContainerEl.appendChild(scoreEl);
    resultContainerEl.classList.add('show');
}

nextBtn.addEventListener('click', () => {
    if (count < stepEl.length - 1) {
        getAnswer();
    }
    else {
        getAnswer();
        getResult();
    }
})

