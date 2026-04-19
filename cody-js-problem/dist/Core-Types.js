"use strict";
// TypeScript has three fundamental primitive types that form the building blocks of most applications: string, number, and boolean. These types allow you to enforce what kind of data your variables can hold.
// The string type is used for text data. You can declare a string variable like this:
// let productName: string = "Laptop";
// The number type handles all numeric values in TypeScript - both integers and decimals:
// let price: number = 999.99;
// The boolean type represents true/false values, perfect for flags and conditions:
// let inStock: boolean = true;
// TODO: Write your code here
// Declare the three variables with explicit type annotations and values
let productName = "Gaming Mouse";
let price = 49.99;
let inStock = true;
// Then print them to the console
console.log(productName);
console.log(price);
console.log(inStock);
// Declare a variable named dynamicData with the type any and assign it the number 42.
// Then reassign dynamicData to the string "Hello World" to demonstrate the flexibility of the any type.
// Finally, print the variable to the console to show its current value.
let dynamicData = 42;
dynamicData = "Hello World";
console.log(dynamicData);
// Create a variable named userInput with the type unknown and assign it the string "TypeScript".
// Then write a type guard using typeof to check if userInput is a string. If it is a string, print the uppercase version of the string to the console. If it's not a string, print "Not a string" to the console.
// This demonstrates how unknown requires type checking before you can safely use type-specific methods like toUpperCase().
let userInput = "TypeScript";
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
else {
    console.log("Not a string");
}
// Create a function named getStringLength that accepts a parameter of type string | null and returns a number.
// The function should handle both cases:
// If the parameter is a string, return its length
// If the parameter is null, return 0
// Test your function by calling it with the following values and printing the results:
// Call getStringLength("Hello TypeScript")
// Call getStringLength(null)
// Call getStringLength("TS")
console.log("Starting File");
let text = null;
function getStringLength(text) {
    if (text === null) {
        return 0;
    }
    else {
        return text.length;
    }
}
console.log(getStringLength(text));
