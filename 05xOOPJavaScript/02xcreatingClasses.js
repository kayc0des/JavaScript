/* Train Class */

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let myFirstTrain = new Train('red', false);
console.log(myFirstTrain);
let mySecondTrain = new Train('blue', false);
let myThirdTrain = new Train('blue', false);

let train4 = new Train('red', false);
train4.toggleLights(); /* Changed the lights on property to true */
train4.lightsStatus(); /* Console.log the status of the lights on property */
train4.getSelf(); /* Prints out the the train4 object */
train4.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

let train5 = new Train('blue', false);
let highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();

train5.getPrototype();
highSpeed1.getPrototype();