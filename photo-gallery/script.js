const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");
const spinnerEl = document.getElementById("spinner");

btnEl.addEventListener('click', (e) => {
  galleryEl.innerHTML = "";
  const inputValue = document.getElementById('input').value;

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
    errorMessageEl.style.display = 'block';
    errorMessageEl.innerText = `Number should be between 1 and 10`;
    return;
  }
  else {
    fetchImages(inputValue);
  }

}, false);

const fetchImages = async (inputValue) => {
  try {
    btnEl.style.display = 'none';
    spinnerEl.style.display = 'block'
    const response = await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
      Math.random() * 1000
    )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`);
    const data = await response.json();
    if (data) {
      data.forEach((pic) => {
        const img = document.createElement('img');
        img.src = `${pic.urls.small}`;
        img.alt = 'image';
        galleryEl.appendChild(img);
        spinnerEl.style.display = 'none';
        btnEl.style.display = 'block';
        errorMessageEl.style.display = 'none';
      });
    }

  } catch (error) {
    errorMessageEl.style.display = 'block';
    errorMessageEl.innerText = "An error happened, try again later";
    btnEl.style.display = 'block';
    spinnerEl.style.display = 'none';
  }
}