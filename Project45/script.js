const inputEl = document.querySelector('.input');
const buttons = document.querySelectorAll('span');

let string = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            evaluateResult();
        }
        else if (e.target.innerText == 'AC') {
            allClear();
        }
        else if (e.target.dataset.value == 'clear') {
            clear();
        }
        else {
            string += e.target.innerText;
            inputEl.value = string;

        }
    })
});

function evaluateResult() {
    try {
        string = String(eval(string));
        inputEl.value = string;

    } catch (error) {
        alert("Please Enter an Valid Expression!");
        string = "";
        inputEl.value = string;
    }

}

function allClear() {
    string = "";
    inputEl.value = string;

}

function clear() {

    string = string.slice(0, string.length - 1);
    inputEl.value = string;
}