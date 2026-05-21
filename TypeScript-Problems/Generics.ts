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