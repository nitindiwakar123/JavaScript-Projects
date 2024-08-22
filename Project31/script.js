const container = document.querySelector('.container');

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

for (let i = 0; i < 30; i++) {
    const color = randomColor();

    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container')
    colorContainerEl.innerText = color;
    colorContainerEl.style.backgroundColor = color;
    container.appendChild(colorContainerEl);

    colorContainerEl.addEventListener('click', () => {
        document.body.style.backgroundColor = colorContainerEl.innerText;
    })
}

