// TypeScript has three fundamental primitive types that form the building blocks of most applications: string, number, and boolean. These types allow you to enforce what kind of data your variables can hold.
// The string type is used for text data. You can declare a string variable like this:
// let productName: string = "Laptop";
// The number type handles all numeric values in TypeScript - both integers and decimals:
// let price: number = 999.99;
// The boolean type represents true/false values, perfect for flags and conditions:
// let inStock: boolean = true;

export {};

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


// Create a variable named userInput with the type unknown and assign it the string "TypeScript".
// Then write a type guard using typeof to check if userInput is a string. If it is a string, print the uppercase version of the string to the console. If it's not a string, print "Not a string" to the console.
// This demonstrates how unknown requires type checking before you can safely use type-specific methods like toUpperCase().

let userInput: unknown = "TypeScript";

if(typeof userInput === "string"){ 
    console.log(userInput.toUpperCase())
}
else{ 
    console.log("Not a string")
}


// Create a function named getStringLength that accepts a parameter of type string | null and returns a number.
// The function should handle both cases:
// If the parameter is a string, return its length
// If the parameter is null, return 0
// Test your function by calling it with the following values and printing the results:
// Call getStringLength("Hello TypeScript")
// Call getStringLength(null)
// Call getStringLength("TS")
console.log("Starting File")

let text: string | null = null;

function getStringLength(text: string | null): number { 
    if(text === null){ 
        return 0;
    }
    else{
        return text.length;
    }
}

console.log(getStringLength(text));


// Create three variables using TypeScript's type inference without explicit type annotations:
// Declare a variable named companyName and initialize it with the string "TechCorp".
// Declare a variable named employeeCount and initialize it with the number 150.
// Declare a variable named isPublic and initialize it with the boolean value false.
// Print all three variables to the console on separate lines in the order they were declared.
// TypeScript will automatically infer the correct types based on the initial values you assign to each variable.


let companyName = "TechCorp";
let employeeCount = 150;
let isPublic = false;

console.log(companyName);
console.log(employeeCount);
console.log(isPublic);


// Declare a variable named totalScore with the explicit type number without assigning it an initial value.
// On the next line, assign the value 95 to the totalScore variable.
// Then declare another variable named playerName with the explicit type string without assigning it an initial value.
// On the next line, assign the value "Alex" to the playerName variable.
// Finally, print both variables to the console on separate lines, first totalScore then playerName.

let totalScore: number;
let playerName: string;

totalScore = 95;
playerName = "Alex";

console.log(totalScore);
console.log(playerName);


// Create a function named getTypeInfo that takes a parameter of type any and returns a string.
// The function should use the typeof operator to determine the type of the input parameter and return that type as a string.
// Test your function by calling it with the following values and printing each result:
// Call getTypeInfo("Hello")
// Call getTypeInfo(42)
// Call getTypeInfo(true)
// Call getTypeInfo(null)
// Print each result on a separate line in the order listed above.

function getTypeInfo(input: any){ 
    return(typeof input).toString();
}

console.log(getTypeInfo("Hello"));
console.log(getTypeInfo(42));
console.log(getTypeInfo(true));
console.log(getTypeInfo(null));


// Create a typed array named scores that can only hold numbers and initialize it with the values 85, 92, and 78.
// Then create another typed array named studentNames that can only hold strings and initialize it with the values "Alice", "Bob", and "Charlie".
// Finally, create a typed array named passedExams that can only hold boolean values and initialize it with true, false, and true.
// Print all three arrays to the console on separate lines in the order they were created.

let scores: number[] = [85, 92, 78];
let studentName: string[] = ["Alice", "Bob", "Charlie"];
let passedExam: boolean[] = [true, false, true];

console.log(scores);
console.log(studentName);
console.log(passedExam);