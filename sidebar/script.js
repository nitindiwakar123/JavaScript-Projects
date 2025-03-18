const showList = document.querySelector('.fa-bars');
const hideList = document.querySelector('.fa-times');
const sidebarEl = document.querySelector('.sidebar');


showList.addEventListener('click', (e) => {
    sidebarEl.classList.toggle('show-sidebar')
}, false)

hideList.addEventListener('click', (e) => {
    sidebarEl.classList.remove('show-sidebar')
}, false)