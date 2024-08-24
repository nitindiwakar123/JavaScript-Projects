const buttonsContainerEl = document.querySelector('.buttonsContainer');
const resultContainerEl = document.querySelector('.resultContainer');
const valuesEl = document.querySelector('.data');

let result;
let input = "";

const displayResult = () => {
    valuesEl.innerText = result;
}

const calculateResult = (operator, num1, num2) => {

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;

        default:
            result = "error";
            break;
    }
    return result;
}

const checkValues = (value) => {
    input += value;
    valuesEl.innerText = input;
    let num1 = result;
    let num2 = 0;
    let operator;

    if (input.includes('+')) {
        operator = '+';
        num1 = parseFloat(input.slice(0, input.indexOf('+')));
        num2 = parseFloat(input.slice(input.indexOf('+') + 1));
    }
    else if (input.includes('-')) {
        operator = '-';
        num1 = parseFloat(input.slice(0, input.indexOf('-')));
        num2 = parseFloat(input.slice(input.indexOf('-') + 1));
    }
    else if (input.includes('*')) {
        operator = '*';
        num1 = parseFloat(input.slice(0, input.indexOf('*')));
        num2 = parseFloat(input.slice(input.indexOf('*') + 1));
    }
    else if (input.includes('/')) {
        operator = '/';
        num1 = parseFloat(input.slice(0, input.indexOf('/')));
        num2 = parseFloat(input.slice(input.indexOf('/') + 1));
    }

    calculateResult(operator, num1, num2);
}

const checkInput = (e) => {
    let value = e.target.dataset.value;

    if (value == "AC") {
        allClear()
    }
    else if (value == "clear") {
        clear()
    }
    else if (value == "=") {
        displayResult();
    }
    else if (value == "+" || value == "-" || value == "*" || value == "/") {
        checkValues(value);
    }
    else {
        console.log(value);
        checkValues(value)
    }

}

buttonsContainerEl.addEventListener('click', checkInput, false)