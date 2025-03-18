const birthDate = document.querySelector('#birthDate');
const submit = document.querySelector('#submit');
const result = document.querySelector('.result');
const form = document.querySelector('form');

const calculateAge = () => {
    const birthdayValue = birthDate.value;
    if (birthdayValue === "" || birthdayValue === " ") {
        alert("Please Enter Valid Date of Birth!")
    }
    else {
        const age = getAge(birthdayValue);
        result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateAge();
})