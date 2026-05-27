// Create a function that processes data from an external API simulation. You'll work with values of type unknown and use type assertions to safely access their properties.

// Create a variable apiResponse of type unknown and assign it the following JSON string:

// {"userId": 42, "username": "alice_dev", "isActive": true}
// Create a function named processUserData that:

// Takes a parameter data of type unknown
// Uses a type assertion to treat data as a string
// Parses the JSON string using JSON.parse()
// Uses another type assertion to treat the parsed result as an object with properties userId (number), username (string), and isActive (boolean)
// Returns a formatted string: "User [userId]: [username] (Active: [isActive])"
// Has an explicit return type of string
// Create additional test data:

// Create secondApiResponse of type unknown with the JSON string: {"userId": 15, "username": "bob_admin", "isActive": false}
// Create thirdApiResponse of type unknown with the JSON string: {"userId": 99, "username": "charlie_user", "isActive": true}
// Test your function and print the following outputs:

// Call processUserData with apiResponse and print the result
// Call processUserData with secondApiResponse and print the result
// Call processUserData with thirdApiResponse and print the result


const apiResponse: unknown = '{"userId": 42, "username": "alice_dev", "isActive": true}';
const secondApiResponse: unknown = '{"userId": 15, "username": "bob_admin", "isActive": false}';
const thirdApiResponse: unknown = '{"userId": 99, "username": "charlie_user", "isActive": true}';

// TODO: Create the processUserData function here
function processUserData(data: unknown): string{ 
    let user = data as string;
    let parsedUser = JSON.parse(user) as { 
        userId: number,
        username: string,
        isActive: boolean
     };

    return `User ${parsedUser.userId}: ${parsedUser.username} (Active: ${parsedUser.isActive})`;
};

// Test the function and print results
console.log(processUserData(apiResponse));
console.log(processUserData(secondApiResponse));
console.log(processUserData(thirdApiResponse));



// Create a function that processes different types of media items using the in operator to distinguish between them.

// Create two type aliases:

// Movie with properties title (string) and director (string)
// Song with properties title (string) and artist (string)
// Create a function named getMediaInfo that:

// Takes a parameter media of type Movie | Song
// Uses the in operator to check if the director property exists
// Returns "Movie: [title] directed by [director]" if it's a movie
// Returns "Song: [title] by [artist]" if it's a song
// Has an explicit return type of string
// Create a second function named processValue that:

// Takes a parameter value of type string | Date
// Uses the instanceof operator to check if value is a Date
// Returns the year as a number if it's a Date (using getFullYear())
// Returns the string length as a number if it's a string
// Has an explicit return type of number
// Create test data:

// movie1: { title: "Inception", director: "Christopher Nolan" }
// song1: { title: "Bohemian Rhapsody", artist: "Queen" }
// movie2: { title: "The Matrix", director: "The Wachowskis" }
// song2: { title: "Imagine", artist: "John Lennon" }
// testDate: new Date("2023-12-25")
// testString: "TypeScript"
// Print the following outputs:

// Call getMediaInfo with movie1
// Call getMediaInfo with song1
// Call getMediaInfo with movie2
// Call getMediaInfo with song2
// Call processValue with testDate
// Call processValue with testString



type Movie = { 
    title: string,
    director: string
};

type Song = { 
    title: string,
    artist: string
};


// Create the getMediaInfo function
function getMediaInfo(media: Movie | Song): string { 
    if("director" in media){ 
        return `Movie: ${media.title} directed by ${media.director}`
    }
    else{ 
        return `Song: ${media.title} by ${media.artist}`
    }
};

// Create the processValue function
function processValue(value: string | Date):number { 
    if(value instanceof Date){ 
        return value.getFullYear();
    }
    else{ 
        return value.length
    }
}

// Create test data
const movie1 = { title: "Inception", director: "Christopher Nolan" };
const song1 = { title: "Bohemian Rhapsody", artist: "Queen" };
const movie2 = { title: "The Matrix", director: "The Wachowskis" };
const song2 = { title: "Imagine", artist: "John Lennon" };
const testDate = new Date("2023-12-25");
const testString = "TypeScript";

// Print the outputs
console.log(getMediaInfo(movie1));
console.log(getMediaInfo(song1));
console.log(getMediaInfo(movie2));
console.log(getMediaInfo(song2));
console.log(processValue(testDate));
console.log(processValue(testString));



// Create a function named throwError that demonstrates the never return type by always throwing an error and never returning normally.

// The function should:

// Take a parameter message of type string
// Throw a new Error with the provided message
// Have an explicit return type of never
// Create a second function named handleOperation that:

// Takes two parameters: operation of type string and value of type number
// Returns value * 2 if operation is "double"
// Returns value / 2 if operation is "half"
// Calls throwError with the message "Invalid operation: [operation]" for any other operation
// Has an explicit return type of number
// Test your functions with the following operations:

// Call handleOperation("double", 5) and print the result
// Call handleOperation("half", 8) and print the result
// Call handleOperation("triple", 3) and print the result (this will throw an error)
// Create additional test cases:

// Call handleOperation("double", 15) and print the result
// Call handleOperation("half", 20) and print the result


function throwError(message: string):never { 
    throw new Error(message);
};
// Create the handleOperation function with number return type
function handleOperation(operation: string, value: number): number{ 
    if(operation === "double"){ 
        return value * 2;
    }
    else if(operation === "half"){ 
        return value / 2
    }
    else{ 
        throw new Error(`Invalid operation: ${operation}`);
    }
}

// Test the functions with try-catch blocks
try {
    console.log(handleOperation("double", 5));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("half", 8));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("triple", 3));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("double", 15));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("half", 20));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}



// Create a function that safely processes user profile data that might contain null values. This challenge demonstrates how strictNullChecks forces you to handle nullable types explicitly.

// Create a function named getUserDisplayName that:

// Takes a parameter fullName of type string | null
// Returns the full name if it's not null
// Returns "Anonymous User" if the full name is null
// Has an explicit return type of string
// Create a second function named formatUserEmail that:

// Takes a parameter email of type string | null
// Returns the email in lowercase if it's not null
// Returns "No email provided" if the email is null
// Has an explicit return type of string
// Create a third function named getUserInfo that:

// Takes two parameters: name of type string | null and email of type string | null
// Uses both previous functions to process the parameters
// Returns a formatted string: "Name: [processed name], Email: [processed email]"
// Has an explicit return type of string
// Test your functions with the following data:

// Call getUserDisplayName("John Smith") and print the result
// Call getUserDisplayName(null) and print the result
// Call formatUserEmail("ALICE@EXAMPLE.COM") and print the result
// Call formatUserEmail(null) and print the result
// Call getUserInfo("Bob Johnson", "bob@test.com") and print the result
// Call getUserInfo(null, null) and print the result
// Call getUserInfo("Sarah Wilson", null) and print the result


function getUserDisplayName(fullName: string | null): string { 
    if(fullName !== null){ 
        return fullName;
    }
    else{ 
        return "Anonymous User"
    }
} 

// Create the formatUserEmail function that takes email (string | null) and returns string
function formatUserEmail(email: string | null): string { 
    if(email !== null){ 
       return email.toLowerCase()
    }
    else{ 
        return "No email provided"
    }
}

// Create the getUserInfo function that takes name and email (both string | null) and returns string
function getUserInfo(name: string | null, email: string | null): string { 
    const username = getUserDisplayName(name);
    const userEmail = formatUserEmail(email);
    return `Name: ${username}, Email: ${userEmail}`;
}

// Test the functions and print the results
console.log(getUserDisplayName("John Smith"));
console.log(getUserDisplayName(null));
console.log(formatUserEmail("ALICE@EXAMPLE.COM"));
console.log(formatUserEmail(null));
console.log(getUserInfo("Bob Johnson", "bob@test.com"));
console.log(getUserInfo(null, null));
console.log(getUserInfo("Sarah Wilson", null));