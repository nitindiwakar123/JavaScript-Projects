const clientXEl = document.querySelector('.clientX')
const clientYEl = document.querySelector('.clientY')
const pageXEl = document.querySelector('.pageX')
const pageYEl = document.querySelector('.pageY')
const screenXEl = document.querySelector('.screenX')
const screenYEl = document.querySelector('.screenY')
const offsetXEl = document.querySelector('.offsetX')
const offsetYEl = document.querySelector('.offsetY')
const layerXEl = document.querySelector('.layerX')
const layerYEl = document.querySelector('.layerY')

window.addEventListener('mousemove', (e) => {
    clientXEl.innerText = e.clientX;
    clientYEl.innerText = e.clientY;

    pageXEl.innerText = e.pageX;
    pageYEl.innerText = e.pageY;

    screenXEl.innerText = e.screenX;
    screenYEl.innerText = e.screenY;

    offsetXEl.innerText = e.offsetX;
    offsetYEl.innerText = e.offsetY;

    layerXEl.innerText = e.layerX;
    layerYEl.innerText = e.layerY;
})