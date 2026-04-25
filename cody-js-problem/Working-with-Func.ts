// Create a function named add that takes two parameters of type number and returns their sum. The function must have an explicit return type annotation of number.
// Create another function named getFullName that takes two parameters: firstName of type string and lastName of type string. The function should return the full name as a single string with a space between the first and last names. Add an explicit return type annotation of string.
// Create a third function named isEligible that takes two parameters: age of type number and hasLicense of type boolean. The function should return true if the person is 18 or older AND has a license, otherwise return false. Add an explicit return type annotation of boolean.
// Test your functions by calling them with the following values and printing the results:
// Call add with 15 and 27
// Call getFullName with "John" and "Smith"
// Call isEligible with 20 and true
// Call isEligible with 16 and true
// Print each result on a separate line in the order specified above.



function add(x:number, y:number):number{ 
    return x + y;
}


function getFullName(firstName: string, lastName: string): string { 
    return firstName + ' ' + lastName;
}


function isEligible(age: number, hasLicense: boolean): boolean { 
    if(age >= 18 && hasLicense){ 
        return true;
    }
   return false;
}


console.log(add(15, 27));

console.log(getFullName("John", "Smith"));

console.log(isEligible(20, true));

console.log(isEligible(16, true));



// Convert the following regular function declaration to an arrow function while maintaining all type annotations:
// function subtract(a: number, b: number): number {
//   return a - b;
// }
// Create an arrow function named subtract that performs the same operation with the same parameter types and return type.
// Then create two additional arrow functions:
// An arrow function named createMessage that takes a parameter text of type string and returns a string with the format "Message: [text]". Include explicit type annotations for both the parameter and return type.
// An arrow function named isPositive that takes a parameter num of type number and returns true if the number is greater than 0, otherwise false. Include explicit type annotations for both the parameter and return type.
// Test your arrow functions by calling them with the following values and printing the results:
// Call subtract with 10 and 3
// Call createMessage with "Hello World"
// Call isPositive with -5
// Call isPositive with 8
// Print each result on a separate line in the order specified above.


const subtract = (a: number, b: number): number => {
  return a - b;
};

const createMessage = (text: string,): string => { 
    return `Message: ${text}`;
}

const isPositive = (num: number): boolean => { 
    if(num > 0){ 
        return true;
    }
    return false;
}

console.log(subtract(10, 3));
console.log(createMessage("Hello World"));
console.log(isPositive(-5));
console.log(isPositive(8));

