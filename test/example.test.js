import { addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers } 
    from '../mathUtils.js';

const test = QUnit.test;

test('addTwoNumbers should return 7 if passed 3 and 4', (expect) => {
    const expected = 7; 
    const firstNumber = 3;
    const secondNumber = 4;

    const actual = addTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});


test('subtractTwoNumbers should return 7 if passed 14 and 7', (expect) => {
    const expected = 7;
    const firstNumber = 14;
    const secondNumber = 7;

    const actual = subtractTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});

test('multiplyTwoNumbers should return 14 if passed 7 and 2', (expect) => {
    const expected = 14; 
    const firstNumber = 7;
    const secondNumber = 2;

    const actual = multiplyTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});

test('divideTwoNumbers should return 7 if passed 14 and 2', (expect) => {
    const expected = 7;
    const firstNumber = 14;
    const secondNumber = 2;

    const actual = divideTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});