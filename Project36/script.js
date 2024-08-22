const formEl = document.querySelector('#form');
const scoreEl = document.querySelector('#score');
const questionEl = document.querySelector('#question');
const inputEl = document.querySelector('#input');
const buttonEl = document.querySelector('#btn');

let score = getScore() || 0;  // Ensure the score is initialized correctly
scoreEl.innerText = `Score: ${score}`;

let num1, num2;  // Declare variables to store the numbers for the current question

// Generate a new question and update the HTML
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10 + 1);  // Random number between 1 and 9
    num2 = Math.floor(Math.random() * 10 + 1);  // Random number between 1 and 9
    questionEl.innerText = `What is ${num1} multiply by ${num2}?`;  // Display the question
}

// Calculate the correct answer based on the current question
function calculateAnswer() {

    return num1 * num2;  // Multiply the two numbers
}

// Update the score and save it to localStorage
function updateScore(score) {
    scoreEl.innerText = `Score: ${score}`;  // Update score display
    saveScore(score);  // Save to localStorage
}

// Save score to localStorage
function saveScore(score) {
    localStorage.setItem("score-item", JSON.stringify(score));
}

// Retrieve score from localStorage
function getScore() {
    return JSON.parse(localStorage.getItem("score-item"));
}

// Check the user's answer
function checkAnswer(userAnswer) {

    const correctAnswer = calculateAnswer();  // Calculate the correct answer based on the current question
    if (userAnswer === correctAnswer) {
        inputEl.value = "";  // Clear the input field
        score++;  // Increment the score
        updateScore(score);  // Update the score
        generateQuestion();  // Generate a new question
    } else {
        score--;
        if (score < 0) score == 0;
        updateScore(score)
        alert("Incorrect answer, try again!");
    }
}

// Listen for form submission
formEl.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from refreshing the page
    const userAnswer = parseInt(inputEl.value);
    checkAnswer(userAnswer);  // Check the user's answer
});

// Initialize the first question
generateQuestion();
