// 1. import functions and grab DOM elements

import { addTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, subtractTwoNumbers } from './mathUtils.js';

//Addition
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');

export function handleSumClick() {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;
    const sum = addTwoNumbers(value1, value2);
    sumSpan.textContent = sum;
}

//Subtraction
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subSpan = document.getElementById('sub-span');

export function handleSubtractClick() {
    const valueb1 = subInput1.valueAsNumber;
    const valueb2 = subInput2.valueAsNumber;
    const sub = subtractTwoNumbers(valueb1, valueb2);
    subSpan.textContent = sub;
}

//Multiplication
const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulSpan = document.getElementById('mul-span');

export function handleMultiplyClick() {
    const valuem1 = mulInput1.valueAsNumber;
    const valuem2 = mulInput2.valueAsNumber;
    const mul = multiplyTwoNumbers(valuem1, valuem2);
    mulSpan.textContent = mul;
}

// Division
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divSpan = document.getElementById('div-span');


export function handleDivideClick() {
    const valued1 = divInput1.valueAsNumber;
    const valued2 = divInput2.valueAsNumber;
    const div = divideTwoNumbers(valued1, valued2);
    divSpan.textContent = div;
}

