// Create a generic function named wrapInObject that takes an argument of any type and returns an object containing that value.

// The function should:

// Use a generic type parameter T
// Accept one parameter named item of type T
// Return an object with a single property value of type T
// Have an explicit return type annotation
// Create the following variables to test your function:

// wrappedString - call wrapInObject with the string "Hello TypeScript"
// wrappedNumber - call wrapInObject with the number 42
// wrappedBoolean - call wrapInObject with the boolean true
// Print the following outputs:

// Print wrappedString.value
// Print wrappedNumber.value
// Print wrappedBoolean.value
// Print the result of calling wrapInObject with the string "Generic", accessing the value property
// Print the result of calling wrapInObject with the number 100, accessing the value property


// Create the generic function wrapInObject
function wrapInObject<T>(item: T): any { 
    let obj: {value: T} = { value: item };
    return obj
};

// TODO: Create the test variables
// wrappedString, wrappedNumber, wrappedBoolean
const wrappedString = "Hello TypeScript";
const wrappedNumber = 42;
const wrappedBoolean = true;

// Print the outputs
console.log(wrappedString);
console.log(wrappedNumber);
console.log(wrappedBoolean);
console.log(wrapInObject("Generic").value);
console.log(wrapInObject(100).value);



// You are provided with the following from the previous challenge:

// The generic function wrapInObject<T> that takes an item of type T and returns { value: T }
// Call the wrapInObject function using both explicit type arguments and type inference:

// Using explicit type arguments:

// Create a variable explicitString by calling wrapInObject<string> with "TypeScript"
// Create a variable explicitNumber by calling wrapInObject<number> with 25
// Create a variable explicitBoolean by calling wrapInObject<boolean> with false
// Using type inference:

// Create a variable inferredString by calling wrapInObject with "Generics" (let TypeScript infer the type)
// Create a variable inferredNumber by calling wrapInObject with 99 (let TypeScript infer the type)
// Create a variable inferredBoolean by calling wrapInObject with true (let TypeScript infer the type)

// TODO: Write your code here
// Create variables using explicit type arguments
const explicitString = wrapInObject<string>("TypeScript");
const explicitNumber = wrapInObject<number>(25);
const explicitBoolean = wrapInObject<boolean>(false);


// Create variables using type inference
const inferredString = wrapInObject("Generics");
const inferredNumber = wrapInObject(99);
const inferredBoolean = wrapInObject(true);

// Print the results
console.log(explicitString.value);
console.log(explicitNumber.value);
console.log(explicitBoolean.value);
console.log(inferredString.value);
console.log(inferredNumber.value);
console.log(inferredBoolean.value);



// Create a generic function named getFirstElement that takes an array of any type and returns the first element or undefined if the array is empty.

// The function should:

// Use a generic type parameter T
// Accept one parameter named arr of type Array<T>
// Return the first element of type T or undefined
// Have an explicit return type annotation of T | undefined
// Create the following arrays using the Array<T> syntax:

// stringArray of type Array<string> containing ["apple", "banana", "cherry"]
// numberArray of type Array<number> containing [10, 20, 30, 40]
// booleanArray of type Array<boolean> containing [true, false, true]
// emptyStringArray of type Array<string> that is empty
// Test your function and print the following outputs:

// Print the result of calling getFirstElement with stringArray
// Print the result of calling getFirstElement with numberArray
// Print the result of calling getFirstElement with booleanArray
// Print the result of calling getFirstElement with emptyStringArray
// Print the result of calling getFirstElement with a new Array<string> containing ["single"]



function getFirstElement <T>(Arr: Array<T>): T | undefined{ 
    if(Arr.length > 0){ 
        return Arr[0]
    }
    return undefined
};

// Create the required arrays using Array<T> syntax
const stringArray: Array<string> = [ "apple", "banana", "cherry" ];
const numberArray: Array<number> = [ 10, 20, 30, 40 ];
const booleanArray: Array<boolean> = [ true, false, true ];
const emptystringArray: Array<string> = [];

console.log(getFirstElement(stringArray));
console.log(getFirstElement(numberArray));
console.log(getFirstElement(booleanArray));
console.log(getFirstElement(emptystringArray));
console.log(getFirstElement(["single"]));






// Create a generic interface named Result that can hold data of any type along with success information.

// The interface should have two properties:

// success of type boolean
// data of type T (the generic type parameter)
// Create the following objects using your generic interface:

// stringResult of type Result<string> with success: true and data: "Operation completed"
// numberResult of type Result<number> with success: true and data: 42
// booleanResult of type Result<boolean> with success: false and data: false
// arrayResult of type Result<string[]> with success: true and data: ["item1", "item2", "item3"]
// Create a generic function named processResult that:

// Uses a generic type parameter T
// Takes one parameter result of type Result<T>
// Returns a string message
// If success is true, returns "Success: [data]"
// If success is false, returns "Failed: [data]"
// Print the following outputs:

// Print the result of calling processResult with stringResult
// Print the result of calling processResult with numberResult
// Print the result of calling processResult with booleanResult
// Print the result of calling processResult with arrayResult
// Print stringResult.data



interface Result <T>{ 
    data: T,
    success: boolean
}


// Create the objects using the Result interface
const stringResult: Result<string> = { 
    data: "Operation completed",
    success: true
};
const numberResult: Result<number> = { 
    data: 42,
    success: true
};
const booleanResult: Result<boolean> = { 
    data: false,
    success: false
};
const arrayResult: Result<string[]> = { 
    data: [ "item1", "item2", "item3" ],
    success: true
};

// Create the generic processResult function
function processResult <T>(result: Result<T>): string { 
    if(result.success === true){ 
        return `Success: ${result.data}`;
    }
    return `Failed: ${result.data}`;
};

console.log(processResult(stringResult));
console.log(processResult(numberResult));
console.log(processResult(booleanResult));
console.log(processResult(arrayResult));
console.log(stringResult.data);


// Create a generic function named makePair that takes two arguments of different types and returns them as a tuple.

// The function should:

// Use two generic type parameters T and U
// Accept a parameter first of type T
// Accept a parameter second of type U
// Return a tuple of type [T, U]
// Have an explicit return type annotation
// Test your function by creating the following variables:

// stringNumberPair - call makePair with "Hello" and 42
// booleanStringPair - call makePair with true and "World"
// numberBooleanPair - call makePair with 100 and false
// Use destructuring to extract values from your tuples:

// Destructure stringNumberPair into variables text and num
// Destructure booleanStringPair into variables flag and message
// Print the following outputs:

// Print text
// Print num
// Print flag
// Print message
// Print the first element of numberBooleanPair
// Print the second element of numberBooleanPair
// Print the result of calling makePair with "TypeScript" and 2024, accessing the first element
// Print the result of calling makePair with 99 and "bottles", accessing the second element


function makePair <T, U>(first: T, second: U): [T, U] { 
    return [first, second];
};

// TODO: Test your function by creating the required variables
// stringNumberPair, booleanStringPair, numberBooleanPair
const stringNumberPair = makePair("Hello", 42);
const booleanStringPair = makePair(true, "World");
const numberBooleanPair = makePair(100, false);
// TODO: Use destructuring to extract values from tuples
// Destructure stringNumberPair and booleanStringPair as specified
const [text, num] = stringNumberPair;
const [flag, message] = booleanStringPair;
const [ num2, bool2 ] = numberBooleanPair;

// TODO: Print all the required outputs
// Print text, num, flag, message, and the other required values
console.log(text);
console.log(num);
console.log(flag);
console.log(message);
console.log(numberBooleanPair[0]);
console.log(numberBooleanPair[1]);
console.log(makePair("TypeScript", 2024)[0]);
console.log(makePair(99, "bottles")[1]);

