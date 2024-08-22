const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('#author');
const buttonEl = document.querySelector('#btn');


const apiURL = "https://api.quotable.io/random";



const getQuote = async () => {

    try {
        buttonEl.innerText = "Loading..."
        buttonEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        quoteEl.innerText = data.content;
        authorEl.innerText = data.author;
        buttonEl.innerText = "Get a quote";
        buttonEl.disabled = false;

    } catch (error) {
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened";
        buttonEl.innerText = "Get a quote";
        buttonEl.disabled = false;
    }

}

getQuote();

buttonEl.addEventListener('click', getQuote);