// TypeScript has three fundamental primitive types that form the building blocks of most applications: string, number, and boolean. These types allow you to enforce what kind of data your variables can hold.
// The string type is used for text data. You can declare a string variable like this:
// let productName: string = "Laptop";
// The number type handles all numeric values in TypeScript - both integers and decimals:
// let price: number = 999.99;
// The boolean type represents true/false values, perfect for flags and conditions:
// let inStock: boolean = true;

// TODO: Write your code here
// Declare the three variables with explicit type annotations and values
let productName: string = "Gaming Mouse";
let price: number = 49.99;
let inStock: boolean = true
// Then print them to the console
console.log(productName);
console.log(price);
console.log(inStock);


// Declare a variable named dynamicData with the type any and assign it the number 42.
// Then reassign dynamicData to the string "Hello World" to demonstrate the flexibility of the any type.
// Finally, print the variable to the console to show its current value.

let dynamicData:any = 42;
dynamicData = "Hello World";
console.log(dynamicData);