const inputEl = document.querySelector('#input');
const copyButtonEl = document.querySelector('.fa-copy');
const generateButtonEl = document.querySelector('.btn');
const alertContainerEl = document.querySelector('.alert-container');

const generatePassword = (e) => {
    let allCharacters = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = [];

    for (let i = 0; i < 14; i++) {
        let random = Math.floor(Math.random() * 80);

        password.push(allCharacters[random])
    }

    inputEl.value = password.join("");
    alertContainerEl.innerText = `Password Copied!`

}

const copyPassword = () => {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}

generateButtonEl.addEventListener('click', generatePassword);
copyButtonEl.addEventListener('click', (e) => {
    copyPassword();
    if (inputEl.value) {
        alertContainerEl.classList.remove("active");

        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
});