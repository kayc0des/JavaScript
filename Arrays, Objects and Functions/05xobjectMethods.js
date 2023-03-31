/* object methods js */

var car = {};

car.mileage = 98765;
car.color = "Black";
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on!")
}
console.log(car)
car.turnTheKey();
car.lightsOn();