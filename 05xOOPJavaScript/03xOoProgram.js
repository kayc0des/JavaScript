/* Designing an OO Program */

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, current energy level is", this.energy);
        } else if (this.energy == 0) {
            this.sleep()
        }
    }
    sleep() {
        this.energy += 20;
        console.log("Energy is increasing, current energy level is", this.energy);
    }
    getColor() {
        console.log(this.color);
    }
}
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound = 'meow') {
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(tigerSound = 'Roar!', color, energy, sound, canJumpHigh, canClimbTrees) {
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

let polly = new Parrot(true);
let fiji = new Parrot(false);

polly.makeSound();
fiji.makeSound(true);

console.log(polly.color);
console.log(polly.energy);

polly.isActive();

let penguin = new Bird("shriek", false, "black and white", 200);
console.log(penguin);

let leo = new HouseCat();

leo.makeSound();
leo.makeSound(true);

let cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);

//Destructuring the penguin object

let {sound} = penguin;
console.log(sound);

console.log(sound === penguin.sound);

sound = "chuck-chuck";
console.log(sound);

console.log(sound === penguin.sound);