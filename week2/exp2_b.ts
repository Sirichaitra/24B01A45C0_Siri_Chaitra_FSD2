//Arrow functions
const addition = (a: number, b: number): number => {
    return a + b;
};
console.log(addition(10, 20));
//for arrays
const nums: number[] = [10, 20, 30, 40];
nums.forEach((num: number): void => {
    console.log(num);
});
//multiple parameters
const multiply = (x: number, y: number): number => {
    return x * y;
};
console.log(multiply(6, 4));