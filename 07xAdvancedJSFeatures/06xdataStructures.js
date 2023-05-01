/* Maps and Sets */

let mapStruct = new Map;
mapStruct.set(1, 'The Champion');
mapStruct.set(2, 'The Runner-up');
mapStruct.set(3, 'The third place');

console.log(mapStruct);
console.log(mapStruct.get(2));

/* Sets */
let fruits = ['apple', 'pear', 'passion fruit', 'pear', 'apple', 'kiwi', 'strawberry'];
let uniqueFruits = new Set(fruits);
console.log(uniqueFruits);