/* Understanding Arguments in JavaScript */

console.log('------Try this out-----');
function sum(a, b) {
    console.log(arguments);
    let result = a + b;
    console.log(result);
}
sum(2, 7); // returns 9
sum(2, 7, 9); // returns 9 - the 3rd argument passed is ignored

console.log('------Using the Argument-like array-----');
function average() {
    console.log(arguments);
    let tot = 0;
    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            tot += arguments[i];
        }
        let result = tot/arguments.length;
        console.log(result);
    } else {
        console.log("Please Pass in Arguments to the Average Function Call");
    }   
}
average(2, 4, 6); 
average(30, 60, 70, 90);
average(10, 20, 30, 40, 50);