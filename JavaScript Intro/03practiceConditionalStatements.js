/* Are You Old Enough? */

var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}


/* Code the days of the week program as a switch statement */

var day = "Sunday";

switch(day) {
    case 'Monday':
        console.log("Attend Meeting at 11am");
        break;
    case 'Tuesday':
        console.log("Go to the gym");
        break;
    case 'Wednesday':
        console.log("Time for Monthly Theme");
        break;
    case 'Thursday':
        console.log("Play Football");
        break;
    case 'Friday':
        console.log("Attend Meeting at 11am");
        break;
    case 'Saturday':
        console.log("Visit a Restaurant");
        break;
    case 'Sunday':
        console.log("Go to church");
        break;
    default:
        console.log("There is no such day");
}
