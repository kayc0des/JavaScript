// More Array Methods

let fruits = ['apple', 'banana', 'lemon', 'orange', 'grapes', 'passion'];
let scores = [50, 30, 67, 15, 98, 23, 86];

//forEach
console.log('------Using an Anonymous Function------')
fruits.forEach((fruit) => {
    console.log(fruit);
});

console.log('------Alternative Method------')
fruits.forEach( function(n) {
    console.log(n);
});

console.log('------Using a defined function------')
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
};
fruits.forEach(appendIndex);

//filter
scores.filter((num) => {
    if (num > 50) {
        console.log(num);
    }
});