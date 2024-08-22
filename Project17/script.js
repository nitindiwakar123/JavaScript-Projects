const rollDice = () => {
    const dice = [...document.querySelectorAll(".die-list")];
    console.log(dice);
    dice.forEach((die) => {
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
    });
}

const toggleClasses = (die) => {
    die.classList.toggle("odd-roll")
    die.classList.toggle("even-roll")
}

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollDice);