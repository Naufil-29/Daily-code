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





// Create a function named displayWelcome that takes a parameter userName of type string and has an explicit return type of void. The function should print a welcome message to the console in the format: "Welcome to our application, [userName]!"

// Create another function named logError that takes a parameter errorMessage of type string and has an explicit return type of void. The function should print an error message to the console in the format: "ERROR: [errorMessage]"

// Create a third function named processData that takes no parameters and has an explicit return type of void. The function should print the message "Processing data..." to the console, then print "Data processing complete." on a new line.

// Test your functions by calling them in the following order:

// Call displayWelcome with "Alice"
// Call processData with no arguments
// Call logError with "Invalid input detected"
// Call displayWelcome with "Bob"
// Each function call should produce output on separate lines in the order specified above.


// Create the displayWelcome function that takes userName (string) and returns void
function displayWelcome(username: string): void { 
   console.log( `Welcome to our application, ${username}!`)
}
// Create the logError function that takes errorMessage (string) and returns void
function logError(errorMessage: string): void{ 
    console.log(`ERROR: ${errorMessage}`)
}  
// Create the processData function that takes no parameters and returns void
function processData():void { 
    console.log("Processing data...");
    console.log("Data processing complete.");
}
// TODO: Call the functions in the specified order:
// 1. displayWelcome with "Alice"
displayWelcome("Alice");
// 2. processData with no arguments
processData();
// 3. logError with "Invalid input detected"
logError("Invalid input detected");
// 4. displayWelcome with "Bob"
displayWelcome("Bob");



// Create a function named createUserProfile that takes two parameters: username of type string (required) and displayName of type string (optional). The function should return a string with an explicit return type annotation.

// When both parameters are provided, the function should return: "Profile: [displayName] (@[username])"

// When only the username is provided, the function should return: "Profile: @[username]"

// Create another function named calculateDiscount that takes two parameters: price of type number (required) and membershipLevel of type string (optional). The function should return a number with an explicit return type annotation.

// When both parameters are provided, the function should return the price reduced by 10% (multiply by 0.9).

// When only the price is provided, the function should return the original price unchanged.

// Test your functions by calling them with the following values and printing the results:

// Call createUserProfile with "john_doe" and "John Doe"
// Call createUserProfile with only "jane_smith"
// Call calculateDiscount with 100 and "premium"
// Call calculateDiscount with only 75
// Print each result on a separate line in the order specified above.

// TODO: Write your code here
// Create the createUserProfile function with proper type annotations
function createUserProfile(username: string, displayName?: string): string { 
    if(displayName){ 
        return `Profile: ${displayName} (@${username})`;
    }

    return `Profile: @${username}`;
};
// Create the calculateDiscount function with proper type annotations
function calculateDiscount(price: number, membershipLevel?: string): number { 
    if(membershipLevel){ 
        return price * 0.9
    }
    return price;
};

createUserProfile("john_doe", "John Doe");
createUserProfile("jane_smith");
calculateDiscount(100, "premium");
calculateDiscount(75);

// Test the functions and print the results




// Create a function named calculateTax that takes two parameters: price of type number (required) and rate of type number with a default value of 0.05. The function should return the tax amount as a number with an explicit return type annotation.

// The function should calculate the tax by multiplying the price by the rate.

// Create another function named formatGreeting that takes two parameters: name of type string (required) and timeOfDay of type string with a default value of "Hello". The function should return a formatted greeting string with an explicit return type annotation.

// The function should return the greeting in the format: "[timeOfDay], [name]!"

// Create a third function named calculateShipping that takes three parameters: weight of type number (required), distance of type number (required), and expedited of type boolean with a default value of false. The function should return the shipping cost as a number with an explicit return type annotation.

// The function should calculate shipping cost using this formula: (weight * 0.5) + (distance * 0.1). If expedited is true, multiply the result by 2.

// Test your functions by calling them with the following values and printing the results:

// Call calculateTax with 100 (using default rate)
// Call calculateTax with 200 and 0.08
// Call formatGreeting with "Alice" (using default time of day)
// Call formatGreeting with "Bob" and "Good morning"
// Call calculateShipping with 5 and 100 (using default expedited value)
// Call calculateShipping with 3, 50, and true
// Print each result on a separate line in the order specified above.


// Create the calculateTax function
function calculateTax(price:number, rate = 0.05): number{ 
    return price * rate;
};

// Create the formatGreeting function
function formatGreeting(name: string, timeOfDay = "Hello"): string{ 
    return `${timeOfDay}, ${name}!`;
}

// Create the calculateShipping function
function calculateShipping(weight:number, distance: number, expedited = false): number { 
    if(expedited){ 
      let result = (weight * 0.5) + (distance * 0.1);
      return result * 2;   
    }
    return (weight * 0.5) + (distance * 0.1);
}

calculateTax(100);
calculateTax(200, 0.08);
formatGreeting("Bob", "Good morning");
calculateShipping(5, 100);
calculateShipping(3, 50, true);





// Create a function named sumAll that uses rest parameters to accept any number of numeric arguments and returns their sum as a number. The function should have an explicit return type annotation.

// Create another function named findMaximum that uses rest parameters to accept any number of numeric arguments and returns the largest value among them as a number. The function should have an explicit return type annotation.

// Create a third function named concatenateStrings that takes a required separator parameter of type string, followed by rest parameters that accept any number of string arguments. The function should return all the string arguments joined together with the separator between them. The function should have an explicit return type annotation of string.

// Test your functions by calling them with the following values and printing the results:

// Call sumAll with 5, 10, and 15
// Call sumAll with 1, 2, 3, 4, and 5
// Call findMaximum with 8, 3, 12, and 7
// Call findMaximum with 25 and 18
// Call concatenateStrings with "-" as separator and "apple", "banana", "cherry"
// Call concatenateStrings with " | " as separator and "red", "green", "blue", "yellow"
// Print each result on a separate line in the order specified above.

// Create the sumAll function with rest parameters
function sumAll(...numbers: number[]): number { 
    let sum = 0;
    for(const num of numbers){ 
        sum += num;
    }
    return sum;
}


// Create the findMaximum function with rest parameters
function findMaximum(...numbers: number[]): number{ 
    let largest = 0;
    for(const num of numbers){ 
        if(num > largest){ 
            largest = num;
        }
    }
    return largest;
}


// Create the concatenateStrings function with separator and rest parameters
function concatenateStrings(separator: string, ...alphs: string[]): string { 
return alphs.join(separator);
}


// Test the functions and print results
console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings("-", "apple", "banana", "cherry"));
console.log(concatenateStrings(" | ", "red", "green", "blue", "yellow"));




// Create a type alias named StringProcessor for a function that takes a single string parameter and returns a string.

// Create a type alias named NumberCalculator for a function that takes two number parameters and returns a number.

// Create a type alias named BooleanChecker for a function that takes a string parameter and returns a boolean.

// Now implement the following functions that conform to these type aliases:

// Create a function named toUpperCase of type StringProcessor that converts the input string to uppercase
// Create a function named addPrefix of type StringProcessor that adds the prefix "Processed: " to the input string
// Create a function named divide of type NumberCalculator that divides the first number by the second number
// Create a function named power of type NumberCalculator that raises the first number to the power of the second number (use Math.pow)
// Create a function named isEmpty of type BooleanChecker that returns true if the string has length 0, otherwise false
// Create a function named startsWithA of type BooleanChecker that returns true if the string starts with the letter "A" (case-sensitive), otherwise false
// Test your functions by calling them with the following values and printing the results:


// TODO: Create type aliases here
// StringProcessor, NumberCalculator, BooleanChecker
type StringProcessor = (text: string) => string;
type NumberCalculator = (num: number, num2: number) => number;
type BooleanChecker = (text: string) => boolean;

// toUpperCase, addPrefix, divide, power, isEmpty, startsWithA
const toUpperCase: StringProcessor = (input) => { 
    return input.toUpperCase();
};
const addPrefix: StringProcessor = (input) => { 
    let output = `Processed: ${input}`
    return output;
};
const divide: NumberCalculator = (a, b) => { 
    return a / b;
};
const power: NumberCalculator = (a, b) => { 
    return Math.pow(a, b);
};
const isEmpty: BooleanChecker = (input) => { 
    if(input.length === 0){ 
        return true;
    }
    return false;
};
const startsWithA: BooleanChecker = (input) => { 
    if(input.startsWith("A")){ 
        return true;
    }
    return false;
};

console.log(toUpperCase("hello world"));
console.log(addPrefix("data"));
console.log(divide(20, 4));
console.log(power(3, 4));
console.log(isEmpty(""));
console.log(startsWithA("Apple"));





// Create a function named formatName that takes three parameters: firstName of type string (required), lastName of type string (required), and middleName of type string (optional). The function should return a formatted full name as a string with an explicit return type annotation.

// When all three parameters are provided, the function should return the name in the format: "[firstName] [middleName] [lastName]"

// When only the first and last names are provided, the function should return the name in the format: "[firstName] [lastName]"

// The following inputs will be provided:

// First input: firstName as a string
// Second input: lastName as a string
// Third input: middleName as a string (this may be an empty string "" to indicate no middle name)
// Your function should treat an empty string for middleName the same as if no middle name was provided.

// Read the three inputs, call your formatName function with the appropriate parameters, and print the result.

// Note: If the third input is an empty string, call the function with only the first two parameters (do not pass the empty string as the middle name).



// import * as fs from "fs";

// // Read inputs
// const stdinBuffer: Buffer = fs.readFileSync(0);
// const inputs: string[] = stdinBuffer.toString().trim().split('\n');
// const firstName: string = inputs[0];
// const lastName: string = inputs[1];
// const middleName: string = inputs[2];

// TODO: Write your code here
// Create the formatName function with proper type annotations
function formatName(firstName: string, lastName: string, middleName?: string): string{ 
    let fullName = ""
    if(!middleName || middleName.length === 0){ 
        fullName = `${firstName} ${lastName}`;
        return fullName;
    }
    fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
};




// Call the function and output the result

// if(!middleName){ 
//  const result = formatName(firstName, lastName);
//  console.log(result);
// }
// else{
// const result = formatName(firstName, lastName, middleName)
// console.log(result);
// }


// Create a type alias named UserID for a union type that can be either a string or a number.

// Create a type alias named Priority for a union type that can be either a string or a boolean.

// Create a type alias named Status for the string type.

// Now declare the following variables using your type aliases:

// Declare a variable named currentUser of type UserID and assign it the string value "admin123"
// Declare a variable named guestUser of type UserID and assign it the number value 42
// Declare a variable named taskPriority of type Priority and assign it the string value "high"
// Declare a variable named isUrgent of type Priority and assign it the boolean value true
// Declare a variable named orderStatus of type Status and assign it the string value "pending"
// Print each variable's value on a separate line in the order they were declared above.

type userID = string | number;
type Priority = string | boolean;
type Status = string;
// Then declare the variables and assign the specified values
const currentUser: userID = "admin123";
const guestUser: userID = 42;
const taskPriority: Priority = "high";
const isUrgent: Priority = true;
const orderStatus: Status = "pending";

console.log(currentUser)
console.log(guestUser)
console.log(taskPriority)
console.log(isUrgent)
console.log(orderStatus)


// Create a function named printId that accepts a parameter called id of type string | number and prints it to the console. The function should have an explicit return type of void.

// Create another function named processValue that accepts a parameter called data of type boolean | string and returns it unchanged. The function should have an explicit return type of boolean | string.

// Create a third function named formatOutput that accepts a parameter called input of type number | string and returns a formatted string. If the input is a number, return "Number: [input]". If the input is a string, return "Text: [input]". The function should have an explicit return type of string.

// The following inputs will be provided:

// First input: a value that can be either a string or number (for printId)
// Second input: a value that can be either a boolean or string (for processValue)
// Third input: a value that can be either a number or string (for formatOutput)
// Read the three inputs, call each function with the appropriate input, and handle the outputs as follows:

// Call printId with the first input (this will print directly)
// Call processValue with the second input and print the returned value
// Call formatOutput with the third input and print the returned value
// Note: The first input will be provided as a string, but if it represents a number (like "123"), convert it to a number before passing it to printId. The second input will be provided as a string, but if it's "true" or "false", convert it to the corresponding boolean value. The third input will be provided as a string, but if it represents a number, convert it to a number.


const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const input1 = inputs[0];
const input2 = inputs[1];
const input3 = inputs[2];

// Convert inputs to appropriate types
const firstInput = isNaN(Number(input1)) ? input1 : Number(input1);
const secondInput = input2 === "true" ? true : input2 === "false" ? false : input2;
const thirdInput = isNaN(Number(input3)) ? input3 : Number(input3);

// TODO: Write your code here
// Create the three functions: printId, processValue, and formatOutput
function printId(id: string | number): void{ 
    console.log(id);
};
function processValue(data: string | boolean): string|boolean{ 
    return data;
};
function formatOutput(input: number | string): string{ 
   if(typeof input === "number"){ 
        return `Number: ${input}`
   }
   return `Text: ${input}`
};


printId(firstInput);
console.log(processValue(secondInput));
console.log(formatOutput(thirdInput));

