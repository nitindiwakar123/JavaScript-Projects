const button = document.querySelector('#btn');
button.addEventListener('click', function(e){
    document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
})

const random = () => {

    return Math.floor(Math.random() * (255 + 1));

}

console.log(random());