//variable Annotations
// String
let n: string = "Siri";
// Number
let age: number = 20;
// Boolean
let isStudent: boolean = true;
// Any
let v: any = "Hello";
// Unknown
let d: unknown = 100;
// Void (only undefined)
let result: void = undefined;
console.log(n);
console.log(age);
console.log(isStudent);

//array annotation
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);
let names: string[] = ["Siri", "Riya", "Anu"];
console.log(names);
let s: boolean[] = [true, false, true];
console.log(s);

//function annotations
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(10, 20));
function greet(name: string): string {
    return "Hello " + name;
}
console.log(greet("Siri"));

