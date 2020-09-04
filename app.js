// import functions and grab DOM elements

const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumSpan = document.getElementById('sum-span');

// initialize state

sumButton.addEventListener('click', () => {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;


    const sum = value1 + value2;

    sumSpan.textContent = sum;

});

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subSpan = document.getElementById('sub-span');

// initialize state

subButton.addEventListener('click', () => {
    const valueb1 = subInput1.valueAsNumber;
    const valueb2 = subInput2.valueAsNumber;


    const sub = valueb1 - valueb2;
console.log(sub);
    subSpan.textContent = sub;

});

const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulButton = document.getElementById('mul-button');
const mulSpan = document.getElementById('mul-span');

// initialize state

mulButton.addEventListener('click', () => {
    const valuem1 = mulInput1.valueAsNumber;
    const valuem2 = mulInput2.valueAsNumber;


    const mul = valuem1 * valuem2;

    mulSpan.textContent = mul;

});

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divSpan = document.getElementById('div-span');

// initialize state

divButton.addEventListener('click', () => {
    const valued1 = divInput1.valueAsNumber;
    const valued2 = divInput2.valueAsNumber;


    const div = valued1 / valued2;

    divSpan.textContent = div;

});







// set event listeners to update state and DOM
