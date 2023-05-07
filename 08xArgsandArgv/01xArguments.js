/* Arguments in Javascript - Array Like */

class Student {
    constructor(name = 'John', level = 1, fav_language = 'HTML') {
        this.name = name;
        this.level = level;
        this.fav_language = fav_language;
    }

    displayData() {
        console.log(arguments);
        console.log(`${this.name} is a year ${this.level} student who loves ${this.fav_language}`)
    }

    change_lang(lang) {
        this.fav_language = lang;
        console.log(this);
    }
}

const student1 = new Student("Kingsley", 2, "Javascript");
student1.displayData();

/* A function that changes the value of the fav_language property */
function change_language(obj, lang) {
    console.log(arguments);
    const condition = typeof(obj) == 'object' && typeof(lang) == 'string';
    if (arguments.length == 2 && condition) {
        obj.fav_language = lang;
        console.log(obj);
    } else {
        console.log("Please pass in an object as param1 and language value as param2")
    }
}

change_language(student1, "Python");

//simpler method
//student1.change_lang("Python");