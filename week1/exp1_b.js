"use strict";
//any datatype
let flexibleValue = 10;
console.log("now it is a number" + flexibleValue);
flexibleValue = "This is flexible variable";
console.log("now it is a string" + flexibleValue);
flexibleValue = true;
console.log("now it is a boolean" + flexibleValue);
//unknown datatye
let myst = "Hello";
if (typeof myst == "string") {
    console.log("Length of unknown string: " + myst.length);
}
let value = "Hello, TypeScript!";
console.log(value);
console.log(typeof value);
let data;
data = "Siri";
console.log(data);
data = 21;
console.log(data);
data = true;
console.log(data);
//void datatype
function greet() {
    console.log("Hello, Siri!");
}
greet();
function display(name) {
    console.log("Welcome, " + name);
}
display("Siri Chaitra");
