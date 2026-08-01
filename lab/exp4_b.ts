namespace Student {

    export class Details {
        name: string = "Siri";

        display(): void {
            console.log("Name:", this.name);
        }
    }

}

let s = new Student.Details();
s.display();

namespace MathOperations {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function sub(a: number, b: number): number {
        return a - b;
    }

}

console.log(MathOperations.add(10, 20));
console.log(MathOperations.sub(20, 10));