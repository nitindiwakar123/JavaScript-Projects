const icon = document.querySelector(".fas");
const menuEl = document.querySelector(".menu");
const listEl = document.querySelector(".social-lists");
const listItemsEl = document.querySelectorAll(".social-lists li");

menuEl.addEventListener('click', (e) => {
    listEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
}, false);

listItemsEl.forEach((item) => {
    item.addEventListener('click', () => {
        const selectEl = document.querySelector('.select');
        selectEl.innerHTML = item.innerHTML;
        listEl.classList.add("hide");
        menuEl.classList.remove("rotate");
    });
});