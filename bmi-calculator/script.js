const form = document.querySelector('form');
const result = document.querySelector('#result');
// const height = parseInt(document.querySelector('height').value); //this usecase will give you empty value
// result.innerHTML = '';
form.addEventListener('submit', function (e) {
    result.innerHTML = '';
    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);


    if (height === '' || height < 0 || isNaN(height)) {
        result.appendChild(document.createTextNode(`Please give a valid height: ${height}`));
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.appendChild(document.createTextNode(`Please give a valid weight: ${weight}`));
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.appendChild(document.createTextNode(bmi));

    }

})


