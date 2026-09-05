"use strict";
var Student;
(function (Student) {
    class Details {
        name = "Siri";
        display() {
            console.log("Name:", this.name);
        }
    }
    Student.Details = Details;
})(Student || (Student = {}));
let s = new Student.Details();
s.display();
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function sub(a, b) {
        return a - b;
    }
    MathOperations.sub = sub;
})(MathOperations || (MathOperations = {}));
console.log(MathOperations.add(10, 20));
console.log(MathOperations.sub(20, 10));
