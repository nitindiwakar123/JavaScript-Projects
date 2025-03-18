const form = document.querySelector('form');
let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');
let kelvin = document.querySelector('#kelvin');

const calculate = (e) => {
    e.preventDefault();

    let currentValue = parseFloat(e.target.value);

    switch (e.target.id) {
        case "celsius":
            fahrenheit.value = ((9 / 5 * currentValue) + 32).toFixed(2);
            kelvin.value = (currentValue + 273.15).toFixed(2);
            break;

        case "fahrenheit":
            celsius.value = (5 / 9 * (currentValue - 32)).toFixed(2);
            kelvin.value = (5 / 9 * (currentValue - 32) + 273.15).toFixed(2);
            break;

        case "kelvin":
            celsius.value = (currentValue - 273.15).toFixed(2);
            fahrenheit.value = (9 / 5 * (currentValue - 273.15) + 32).toFixed(2);
            break;

        default:
            break;
    }



}

form.addEventListener('blur', calculate)
form.addEventListener('change', calculate)