const buttonEl = document.querySelector("#btn");
const emojiNameEl = document.querySelector("#emoji-name");

const emojiApi = "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1";
const emoji = [];

const getEmoji = async () => {
    const response = await fetch(emojiApi);
    const data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        });
    }
}

getEmoji();

buttonEl.addEventListener('click', () => {
    const random = Math.floor(Math.random() * emoji.length);

    buttonEl.innerText = emoji[random].emojiName;
    emojiNameEl.innerText = emoji[random].emojiCode;

});


