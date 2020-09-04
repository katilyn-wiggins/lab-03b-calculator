// import functions and grab DOM elements

import { 
    handleSumClick, handleSubtractClick, handleMultiplyClick, handleDivideClick } from './handlers.js';

const sumButton = document.getElementById('sum-button');
const subButton = document.getElementById('sub-button');
const mulButton = document.getElementById('mul-button');
const divButton = document.getElementById('div-button');

sumButton.addEventListener('click', handleSumClick);
subButton.addEventListener('click', handleSubtractClick);
mulButton.addEventListener('click', handleMultiplyClick);
divButton.addEventListener('click', handleDivideClick);
