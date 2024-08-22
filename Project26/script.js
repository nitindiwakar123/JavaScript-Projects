const progressBarFrontEl = document.querySelector('.progress-bar-front');
const stepEl = document.querySelectorAll('.step');
console.log(stepEl);
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentChecked = 1;

nextButton.addEventListener('click', () => {
    currentChecked++;
    if (currentChecked > stepEl.length) {
        currentChecked = stepEl.length;
    }

    updateStepProgress();
});

prevButton.addEventListener('click', () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }

    updateStepProgress();
});

const updateStepProgress = () => {
    stepEl.forEach((step, idx) => {
        if (idx < currentChecked) {
            step.classList.add("checked");
            step.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${idx === 0
                    ? "Start"
                    : idx === stepEl.length - 1
                        ? "Final"
                        : "Step " + idx
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

    if (currentChecked === 1) {
        prevButton.disabled = true;
    }
    else if (currentChecked === stepEl.length) {
        nextButton.disabled = true;
    }
    else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}