"use strict";
//functions
//with parameters and return type
function welcome(name) {
    return "Welcome " + name;
}
console.log(welcome("Siri"));
function check(val) {
    if (val >= 18)
        return true;
    else
        return false;
}
if (check(10))
    console.log("Elegible to vote");
else
    console.log("Not elegible");
//default parameters
function temp(country = "India") {
    return "Hello " + country;
}
console.log(temp("Asia"));
console.log(temp());
function getAge(a = 18) {
    return "your age is " + a;
}
console.log(getAge(10));
console.log(getAge());
//optional parameters
//optional means the parameter may or may not be given to the function
function aboutme(name, age) {
    console.log("Name: " + name);
    if (age !== undefined) {
        console.log("Age: " + age);
    }
}
aboutme("Siri");
aboutme("Siri", 20);
function introduce(name, branch) {
    console.log("Name: " + name);
    if (branch) {
        console.log("Branch: " + branch);
    }
}
introduce("Siri");
introduce("Siri", "AI & DS");
//rest parametrs
//means we can give multiple inputs and it will collect them as an array
function add(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(add(10, 20));
console.log(add(10, 20, 30, 40));
function printing(...names) {
    for (let i of names) {
        console.log(i);
    }
}
printing("Siri", "Sri", "Chaitra", "Sahithi");
