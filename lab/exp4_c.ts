// Generic Variable
let numbers: Array<number> = [10, 20, 30];
console.log("Generic Variable:", numbers);

// Generic Function
function display<T>(value: T): T {
    return value;
}

console.log("Number:", display<number>(100));
console.log("String:", display<string>("Hello"));
console.log("Boolean:", display<boolean>(true));

// Generic Constraint
interface Person {
    name: string;
}

function show<T extends Person>(obj: T): void {
    console.log("Name:", obj.name);
}

show({ name: "Siri" });
show({ name: "Rahul" });