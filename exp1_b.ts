//any datatype
let flexibleValue: any = 10;
console.log("now it is a number" + flexibleValue);
flexibleValue = "This is flexible variable";
console.log("now it is a string" + flexibleValue);
flexibleValue = true;
console.log("now it is a boolean" + flexibleValue);

//unknown datatye
let myst: unknown = "Hello";
if (typeof myst == "string") {
    console.log("Length of unknown string: " + myst.length);
}
let value: unknown = "Hello, TypeScript!";
console.log(value);
console.log(typeof value);
let data: unknown;
data = "Siri";
console.log(data);
data = 21;
console.log(data);
data = true;
console.log(data);

//void datatype
function welc(): void {
    console.log("Hello, Siri!");
}
welc();
function display(name: string): void {
    console.log("Welcome, " + name);
}
display("Siri Chaitra");
