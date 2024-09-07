const inputValue = document.querySelector('#inputValue');
// console.log(inputValue);
const result = document.querySelector('.result');
const form = document.querySelector('form');



form.addEventListener('change', (e) => {
    e.preventDefault();
    const value = parseFloat(inputValue.value);

    if (isNaN(value) || value < 1) {
        result.innerText = "Please enter a valid number.";
    }
    else {
        calculateWeight(value);
    }
}, false);

const calculateWeight = (value) => {
    // 1 pound = 0.453592 kilograms
    const weigthInKg = value * 0.453592;

    result.innerText = `Your weight in kg is: ${weigthInKg}`;
}