"use strict";
// Generic Variable
let numbers = [10, 20, 30];
console.log("Generic Variable:", numbers);
// Generic Function
function display(value) {
    return value;
}
console.log("Number:", display(100));
console.log("String:", display("Hello"));
console.log("Boolean:", display(true));
function show(obj) {
    console.log("Name:", obj.name);
}
show({ name: "Siri" });
show({ name: "Rahul" });
