const loanInputEl = document.querySelector('#loan-amount');
const intrestInputEl = document.querySelector('#interest-rate');
const monthInputEl = document.querySelector('#months-to-pay');
const paymentEl = document.querySelector('#payment')

const calculateLoan = (e) => {
    loanValue = parseInt(loanInputEl.value);
    intrestValue = parseInt(intrestInputEl.value);
    monthValue = parseInt(monthInputEl.value);

    const monthlyInterest = intrestValue / 100 / 12;
    const monthlyPayment = ((loanValue * monthlyInterest * Math.pow(1 + monthlyInterest, monthValue)) / (Math.pow(1 + monthlyInterest, monthValue) - 1)).toFixed(2);

    paymentEl.innerText = `Monthly Payment: ${monthlyPayment}`;

}

loanInputEl.addEventListener('change', calculateLoan)
intrestInputEl.addEventListener('change', calculateLoan)
monthInputEl.addEventListener('change', calculateLoan)