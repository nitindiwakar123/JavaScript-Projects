const allImages = document.querySelectorAll('.image-container img');
const imageContainerEl = document.querySelector('.image-container');
const prevButtonEl = document.querySelector('.prev');
const nextButtonEl = document.querySelector('.next');

let currentImage = 0;
let timeout;

nextButtonEl.addEventListener('click', () => {
    currentImage++;
    clearTimeout(timeout);
    updateImg();
}, false);

prevButtonEl.addEventListener('click', () => {
    currentImage--;
    clearTimeout(timeout);
    updateImg();
}, false);


const updateImg = () => {
    if (currentImage > allImages.length - 1) {
        currentImage = 0;
    }
    else if (currentImage < 0) {
        currentImage = allImages.length - 1;
    }
    imageContainerEl.style.transform = `translateX(-${currentImage * 100}%)`;

    timeout = setTimeout(() => {
        currentImage++;
        updateImg();
    }, 2000);
}

updateImg();
