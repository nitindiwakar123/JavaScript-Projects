const countersEl = document.querySelectorAll('.counter');

countersEl.forEach((counterEl) => {
    counterEl.innerText = "";
    incrementCounter();

    function incrementCounter() {
        let counter = 0;
        const dataCeil = +counterEl.getAttribute('data-ceil');
        const duration = 1000; // 1 second total duration
        const intervalTime = 10; // Update every 10 milliseconds
        const increment = dataCeil / (duration / intervalTime);
        console.log(increment);

        const interval = setInterval(() => {
            counter += increment;
            console.log(counter);

            if (counter < dataCeil) {
                counterEl.innerText = Math.ceil(counter);
            } else {
                counterEl.innerText = dataCeil;
                clearInterval(interval);
            }
        }, intervalTime);
    }
});

