window.addEventListener('mousemove', (e) => {
    const span = document.createElement('span');
    span.style.left = `${e.clientX}px`
    span.style.top = `${e.clientY}px`
    const size = Math.random() * 100;
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;
    document.body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
});