/* how to build objects in javascript */

//dot notation
var student = {}
student.Name = "John";
student.Age = 21;
student.Class = "Year 1";
student.Grade = "A";

console.log(student);
console.log(student.Class);

//comma delimited declaration

var teacher = {
    Name: "Lockwood", 
    Age: 42,
    Course: "Javascript",
    Experience: "14 years"
}

console.log(teacher);
console.log(teacher.Course);

//brackets 

var director = {}
director["Name"] = "Fred Swaniker";
director["Age"] = 45;
director["Level"] = "PhD";
director["netWorth"] = "$20 Million"

console.log(director);
console.log(director.Name);