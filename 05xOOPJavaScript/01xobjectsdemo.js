/* Random code: Practice */

class user {
    /* Constructor operator instantiates an object */
    constructor(username, email, address) {
        let condition1 = typeof(username) == 'string' && typeof(email) == 'string' && typeof(address) == 'string';
        let condition2 = username.length >= 3;
        if (condition1 && condition2) {
            this.username = username;
            this.email = email;
            this.address = address;
        } else {
            try {
                throw new TypeError();
            } catch (error) {
                console.log("Error!", error);
            }
        }
    }
    /* Define a new class method */
    changeUserName(username) {
        this.username = username;
    }
}

/* Passing in the wrong type as arguments to instantiate the user object */
const user01 = new user(14, "kayxfx50@gmail.com", 12);
console.log(user01);

/* Instantiate user1 and console.log the email */
const user1 = new user("Kingsley", "k.boafo@alustudent.com", "Kigali");
console.log(user1.email);

/* Instantiate user2 and invoke the change user name method and console the new username and user2 object */
const user2 = new user("Franck", "kayxfx50@gmail.com", "Bujumbura");
user2.changeUserName("Youpi");
console.log(user2.username);
console.log(user2)

