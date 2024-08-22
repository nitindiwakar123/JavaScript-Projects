const form = document.querySelector('form');
const billAmount = document.querySelector('#billAmount')
const tipPercentage = document.querySelector('#tipPercentage')
const submit = document.querySelector('#submit')
const output = document.querySelector('#output')

const calculateTipAmount = (billValue, tipValue) => {
    const tipAmount = billValue * (tipValue / 100);
    return tipAmount;
}

const calculateTotalBill = (billValue, tipAmount) => {

    return billValue + tipAmount;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const billValue = parseInt(billAmount.value);
    const tipValue = parseInt(tipPercentage.value);

    if (isNaN(billValue)) {
        output.innerHTML = `<strong> Error! Invalid bill amount.</strong>`
    }
    else if (isNaN(tipValue)) {
        output.innerHTML = `<strong> Error! Invalid tip percentage.</strong>`
    }
    else {
        const tipAmount = calculateTipAmount(billValue, tipValue);
        console.log(tipAmount);
        const totalBill = calculateTotalBill(billValue, tipAmount).toFixed(2);

        output.innerHTML = `<strong> $ ${totalBill}</strong>`

    }

})