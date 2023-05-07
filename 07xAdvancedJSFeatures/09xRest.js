//Rest

function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  
console.log(sum(1, 2, 3, 4));

/* 
The reduce() function is a high-order function that iterates over an array and reduces it to
a single value. It takes two parameters, a callback function and an optional initial value

Callback function takes two parameters as well - accumulator and currentValue
accumulator: This is the value that is accumulated across all iterations of the array.
currentValue: This is the current value of the array element being processed.
*/