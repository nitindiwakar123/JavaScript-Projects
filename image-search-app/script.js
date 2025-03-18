const accessKey =
    "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector('form');
const inputEl = document.querySelector('#input');
const showMoreButtonEl = document.querySelector('#show-more');
const imageWrapperEl = document.querySelector('.image-wrapper');

let inputData = "";
let page = 1;

const searchImages = async () => {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;

        results.forEach((result) => {
            const imageContainerEl = document.createElement('div');
            imageContainerEl.classList.add('image-container');
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageContainerEl.appendChild(image);
            imageContainerEl.appendChild(imageLink);
            imageWrapperEl.appendChild(imageContainerEl);
        });

        page++;

        if (page > 1) {
            showMoreButtonEl.style.display = "block";
        }
        else {
            showMoreButtonEl.style.display = "none"; // Hide if no results
        }
    } catch (error) {
        console.log(error);
        const p = document.createElement('p');
        p.classList.add('error-message');
        p.innerText = "Something went wrong. please try again later.";
        imageWrapperEl.appendChild(p);
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    imageWrapperEl.innerHTML = "";
    page = 1;
    searchImages();
});

showMoreButtonEl.addEventListener('click', (e) => {
    searchImages();
});
