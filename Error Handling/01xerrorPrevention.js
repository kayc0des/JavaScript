// code a function declaration

function addTwoNums(a, b) {
    console.log(a + b);
}

// invoke funnction with a number and a string 

//addTwoNums(5, '5'); //Output is 55

//update the function with a try catch block and make sure args passed are numbers

function addTwoNums(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError("the first argument is not a number");
        } else if (typeof(b) != 'number') {
            throw new ReferenceError("the second argument is not a number");
        } else {
            console.log(a + b);
        }
    } catch(error) {
        console.log("Error!", error);
    }
}

addTwoNums(5, '5');

console.log("It still works!");