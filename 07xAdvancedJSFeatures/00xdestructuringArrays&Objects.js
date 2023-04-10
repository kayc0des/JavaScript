// Destructuring arrays

let Person = {};

Person.name = 'Kingsley';
Person.age = 22;
Person.status = 'Single';
Person.level = 'Y1 SE Student';

console.log(Person);

//Extract the variable class from the person object as a new variable

let {level} = Person;
console.log(level);

//test to see if values are equal
console.log(level === Person.level); //returns true

//Change value of independed level variable and test value with the source variable
level = 'Y2 SE Student';

console.log(level === Person.level); // returns false