/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
let cars = ["BWM", "Volvo", "Ferrari", "Oddi", "Mercids"];

let numbers = [1, 2, 4, 5, 6, 7];

let names = "Shuvo";

let car = Array.isArray(cars);
let number = Array.isArray(numbers); //Check is it array or not...!
let name = Array.isArray(names);

console.log(car);
console.log("=====================");
console.log(number);
console.log("=====================");
console.log(name);