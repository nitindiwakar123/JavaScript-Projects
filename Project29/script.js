const imageContainerEl = document.querySelector('.image-container');
const buttonEl = document.querySelector('.btn');

const generateImages = () => {
    const imagesCount = 10;

    for (let i = 0; i < imagesCount; i++) {
        const randomNumber = Math.floor(Math.random() * 300 + 1);
        const image = document.createElement('img');
        image.src = `https://picsum.photos/300?random=${randomNumber}`;
        imageContainerEl.appendChild(image);
    }
}

buttonEl.addEventListener('click', generateImages);