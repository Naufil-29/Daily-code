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





