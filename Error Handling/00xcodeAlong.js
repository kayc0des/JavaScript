//Error handling in Javascript try, throw and catch statements

//console.log undefined variables raises a ReferenceError
/*
console.log(a + b);

console.log("The ReferenceError stops the program execution, this statement is not executed")
*/

//To fix this code, I'll use the try and catch statements
try {
    console.log(a + b);
} catch(error) {
    console.log(error);
    console.log("There's a ReferenceError in the try block!")
}

console.log("Program doesn't stop!")

//Using try, throw and catch
try {
    throw new SyntaxError;
} catch(error) {
    console.log(error);
    console.log("New error was thrown in");
}

console.log("Program doesn't stop!");x