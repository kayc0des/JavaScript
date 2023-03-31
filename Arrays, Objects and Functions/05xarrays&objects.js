/*
Exercise: Creating Arrays and objects
*/

//create an array literal and assign it to var clothes
var clothes = [];

//build the clothes array using the push method with five items
function arrBuilder(one, two, three, four, five) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    arr.push(four);
    arr.push(five);
    return arr;
}

clothes = arrBuilder("hoodies", "t-shirts", "shorts", "cargo pants", "bucket hats");

console.log(clothes);

//remove the fifth item using pop
console.log(clothes.pop());

console.log(clothes);

//add a nnew piece of clothing using push
clothes.push("Socks");

console.log(clothes);

//use console.log to show third item
console.log(clothes[2]);

/* Creat a new object literal */

var favCar = {};

favCar.color = "Black"
favCar.convertible = false;

console.log(favCar);

