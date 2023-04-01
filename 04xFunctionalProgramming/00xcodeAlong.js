/* 
Functional Programming
This paradigm works by keeping data and functionality separate

Concepts in FP - First Class Functions, Higher-order Functions, Pure Functions and Side Effects
*/

function addTwoNums (a, b) {
    console.log(a + b);
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() {
    return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
    getNumber = randomNum;
} else {
    getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());

// higher order functions either accepts functions as argumennts or returns functions when invoked

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber() + getNumber());
}

// Pure functionns will always give the same output as long as the args passed are the same

function addTwoNums (a, b) {
    console.log(a + b)
}

addTwoNums(5, 6) //will always give the same output 11