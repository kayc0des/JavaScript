// iterate over objects using the for of loop

class Person {
    constructor(name, age, employed = false){
        this.name = name;
        this.age = age;
        this.employed = employed;
    }
}

const person1 = new Person('Kingsley', 22, true);
console.log(person1);

/* Object Methods Key, values and enntries */
const person1key = Object.keys(person1);
console.log(person1key); // returns an array of the object keys

const person1Values = Object.values(person1);
console.log(person1Values); // returns an array of the object property values

const person1Entries = Object.entries(person1);
console.log(person1Entries); // returns an array of a 2 membered array for each key and value

/* How do we loop over an opject then */
console.log(person1["name"]); // to explain the code person1[key]

for (key of Object.keys(person1)) {
    console.log(key + ":" + person1[key]);
}

/* The for of loop prints out only the property keys and values 
of the object and not that of the source object, for example */

let worker = {
    name: 'Peter',
    age: 50,
    employed: true,
}

const person2 = Object.create(worker);
person2.name = 'Tyler';

for (key of Object.keys(person2)) {
    console.log(key, ":", person2[key]);
}
