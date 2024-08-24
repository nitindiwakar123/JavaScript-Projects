const formEl = document.querySelector('form');
const inputEl = document.querySelector('#input');
const titleEl = document.querySelector('.title');
const meaningEl = document.querySelector('.meaning');
const exampleEl = document.querySelector('.example');
const audioEl = document.querySelector('.audio');
const buttonEl = document.querySelector('.btn');

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const getWord = async (word) => {
    try {
        buttonEl.disabled = true;
        titleEl.innerText = `Searching for word "${word}"...`;
        meaningEl.innerText = "";
        exampleEl.innerText = "";
        const response = await fetch(`${url}${word}`);

        if (!response.ok) {
            throw new Error("Word not found");
        }

        const data = await response.json();
        const wordTitle = data[0].word || "No word title available";
        const meaning = data[0].meanings[0].definitions[0].definition || "No definition available";
        const example = data[0].meanings[0].definitions[0].example || "No example available";
        const audioUrl = data[0].phonetics[0]?.audio || "";

        titleEl.innerText = `Word Title: ${wordTitle}`;
        meaningEl.innerText = `Meaning: ${meaning}`;
        exampleEl.innerText = `Example: ${example}`;

        if (audioUrl) {
            console.log(audioUrl);
            
            audioEl.src = audioUrl;
            audioEl.style.display = 'block';
        } else {
            audioEl.style.display = 'none';
        }

    } catch (error) {
        titleEl.innerText = `Error: ${error.message}`;
        meaningEl.innerText = "";
        exampleEl.innerText = "";
        audioEl.src = "";
    } finally {
        buttonEl.disabled = false;
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const word = inputEl.value.trim();
    if (word) {
        getWord(word);
    } else {
        titleEl.innerText = "Please enter a valid word!";
    }
});
