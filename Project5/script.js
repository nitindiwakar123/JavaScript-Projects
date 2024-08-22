const baseURL = 'https://picsum.photos/200/3';
const container = document.querySelector('.content');
const buttom = document.querySelector('button');

buttom.addEventListener('click', function (e) {

    const row = 7;
    for (let i = 0; i < row * 3; i++) {
        const img = document.createElement('img');
        img.src = `${baseURL}${random()}`;
        container.appendChild(img);
    }
})
function random() {
    return Math.floor(Math.random() * 10 + (10 + 1));
}