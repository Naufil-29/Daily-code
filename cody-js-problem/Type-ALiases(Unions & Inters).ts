// // Create a type alias named UserID for a union type that can be either a string or a number.

// // Create a type alias named Priority for a union type that can be either a string or a boolean.

// // Create a type alias named Status for the string type.

// // Now declare the following variables using your type aliases:

// // Declare a variable named currentUser of type UserID and assign it the string value "admin123"
// // Declare a variable named guestUser of type UserID and assign it the number value 42
// // Declare a variable named taskPriority of type Priority and assign it the string value "high"
// // Declare a variable named isUrgent of type Priority and assign it the boolean value true
// // Declare a variable named orderStatus of type Status and assign it the string value "pending"
// // Print each variable's value on a separate line in the order they were declared above.

// type userID = string | number;
// type Priority = string | boolean;
// type Status = string;
// // Then declare the variables and assign the specified values
// const currentUser: userID = "admin123";
// const guestUser: userID = 42;
// const taskPriority: Priority = "high";
// const isUrgent: Priority = true;
// const orderStatus: Status = "pending";

// console.log(currentUser)
// console.log(guestUser)
// console.log(taskPriority)
// console.log(isUrgent)
// console.log(orderStatus)


// // Create a function named printId that accepts a parameter called id of type string | number and prints it to the console. The function should have an explicit return type of void.

// // Create another function named processValue that accepts a parameter called data of type boolean | string and returns it unchanged. The function should have an explicit return type of boolean | string.

// // Create a third function named formatOutput that accepts a parameter called input of type number | string and returns a formatted string. If the input is a number, return "Number: [input]". If the input is a string, return "Text: [input]". The function should have an explicit return type of string.

// // The following inputs will be provided:

// // First input: a value that can be either a string or number (for printId)
// // Second input: a value that can be either a boolean or string (for processValue)
// // Third input: a value that can be either a number or string (for formatOutput)
// // Read the three inputs, call each function with the appropriate input, and handle the outputs as follows:

// // Call printId with the first input (this will print directly)
// // Call processValue with the second input and print the returned value
// // Call formatOutput with the third input and print the returned value
// // Note: The first input will be provided as a string, but if it represents a number (like "123"), convert it to a number before passing it to printId. The second input will be provided as a string, but if it's "true" or "false", convert it to the corresponding boolean value. The third input will be provided as a string, but if it represents a number, convert it to a number.


// // const stdinBuffer: Buffer = fs.readFileSync(0);
// // const inputs: string[] = stdinBuffer.toString().trim().split('\n');
// // const input1 = inputs[0];
// // const input2 = inputs[1];
// // const input3 = inputs[2];

// // Convert inputs to appropriate types
// // const firstInput = isNaN(Number(input1)) ? input1 : Number(input1);
// // const secondInput = input2 === "true" ? true : input2 === "false" ? false : input2;
// // const thirdInput = isNaN(Number(input3)) ? input3 : Number(input3);

// // TODO: Write your code here
// // Create the three functions: printId, processValue, and formatOutput
// function printId(id: string | number): void{ 
//     console.log(id);
// };
// function processValue(data: string | boolean): string|boolean{ 
//     return data;
// };
// function formatOutput(input: number | string): string{ 
//    if(typeof input === "number"){ 
//         return `Number: ${input}`
//    }
//    return `Text: ${input}`
// };


// printId(firstInput);
// console.log(processValue(secondInput));
// console.log(formatOutput(thirdInput));



// Create a function named processData that accepts a parameter called input of type string | string[] and returns a number. The function should use a type guard to determine the input type and behave as follows:

// If the input is a string, return its length
// If the input is a string[], return the total number of characters across all strings in the array
// Create another function named formatMessage that accepts a parameter called content of type number | boolean and returns a string. The function should use a type guard to determine the input type and behave as follows:

// If the input is a number, return "Value: [number]"
// If the input is a boolean, return "Status: [boolean]"
// The following inputs will be provided:

// First input: a string that represents either a single word or a JSON array of strings like ["apple", "banana", "cherry"]
// Second input: a string that represents either a number or a boolean ("true" or "false")
// Process the inputs as follows:

// For the first input: if it starts with "[", parse it as a JSON array of strings; otherwise, treat it as a single string
// For the second input: if it's "true" or "false", convert it to a boolean; otherwise, convert it to a number
// Call processData with the processed first input and print the result. Then call formatMessage with the processed second input and print the result.

let firstInput = "dog";
let secondInput: number | string = "true";

// Create the processData function with type guard
function processData(input: string | string[]): number {
    let totalLength = 0;
    if (typeof input === "string") {
        return input.length;
    }
    for (let i = 0; i < input.length; i++) {
        let length = input[i].length;
        totalLength += length;
    }
    return totalLength;
}
// Create the formatMessage function with type guard
function formatMessage(content: number | boolean): string { 
    if(typeof content === "number"){ 
        return `Value: ${content}`;
    }
    return `Status: ${content.toString()}`
}

if(firstInput.startsWith("[")){ 
    console.log(processData(JSON.parse(firstInput)));
}
else{
console.log(processData(firstInput));
}
if(secondInput === "true" || secondInput === "false"){ 
    console.log(formatMessage(Boolean(secondInput)))
}
else{
console.log(formatMessage(Number(secondInput)));
}


// Create a type alias named Direction for the literal types "left" | "right" | "up" | "down".

// Create a type alias named GameState for the literal types "menu" | "playing" | "paused" | "gameover".

// Create a type alias named Difficulty for the literal types "easy" | "medium" | "hard".

// Now declare the following variables using your type aliases:

// Declare a variable named playerDirection of type Direction and assign it the value "up"
// Declare a variable named currentState of type GameState and assign it the value "playing"
// Declare a variable named selectedDifficulty of type Difficulty and assign it the value "medium"
// Create a function named movePlayer that accepts a parameter called direction of type Direction and returns a string. The function should return a message in the format "Moving [direction]".

// Create another function named updateGameState that accepts a parameter called state of type GameState and returns a string. The function should return a message in the format "Game state: [state]".

// Call your functions with the variables you created and print the results:

// Call movePlayer with playerDirection and print the result
// Call updateGameState with currentState and print the result
// Print the value of selectedDifficulty
// Print each result on a separate line in the order specified above.


type Direction = "left" | "right" | "up" | "down";
type GameState = "menu" | "playing" | "paused" | "gameover";
type Difficulty = "easy" | "medium" | "hard";
// Declare variables using your type aliases
const playerDirection: Direction = "up";
const currentState : GameState = "playing";
const selectedDifficuilty: Difficulty = "medium";
// Create the movePlayer and updateGameState functions
function movePlayer(direction: Direction):string{ 
    return `Moving ${direction}`
};
function updateGameState(state: GameState):string{ 
    return `Game state: ${state}`
};

console.log(movePlayer(playerDirection));
console.log(updateGameState(currentState));
console.log(selectedDifficuilty);



// Create two type aliases: HasName for an object with a name property of type string, and HasAge for an object with an age property of type number.

// Create a third type alias called Person by intersecting HasName and HasAge using the & operator.

// Create another type alias called HasEmail for an object with an email property of type string.

// Create a fourth type alias called Employee by intersecting all three types: HasName, HasAge, and HasEmail.

// Now create the following variables:

// Create a variable named user of type Person with the name "Alice" and age 25
// Create a variable named worker of type Employee with the name "Bob", age 30, and email "bob@company.com"
// Create a function named displayPerson that accepts a parameter of type Person and returns a string in the format "Name: [name], Age: [age]".

// Create another function named displayEmployee that accepts a parameter of type Employee and returns a string in the format "Name: [name], Age: [age], Email: [email]".

// Call both functions with the appropriate variables and print the results on separate lines.


type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = { email: string };
// Create Person and Employee types using intersection
type person = HasName & HasAge;
type Employee = HasName & HasAge & HasEmail;
// Create variables user and worker
const user: person = { 
    name: "Alice", 
    age: 25 
    };
const worker: Employee = { 
    name: "Bob", 
    age: 30,
    email: "bob@company.com" 
    };
// Create displayPerson and displayEmployee functions
function displayPerson(user: person){ 
    return `Name ${user.name}, Age: ${user.age}`
};

function displayEmployee(worker:Employee){ 
    return `Name: ${worker.name}, Age: ${worker.age}, Email: ${worker.email}`
}

console.log(displayPerson(user));
console.log(displayEmployee(worker));



// Create a type alias named Username for the string type.

// Create a type alias named UserAge for the number type.

// Create a type alias named ContactMethod that combines Username and UserAge using a union type.

// Create a type alias named UserProfile for an object with the following properties:

// id of type number
// displayName of type Username
// preferredContact of type ContactMethod
// Create a type alias named AdminProfile that combines UserProfile with an additional object type containing a permissions property of type string using intersection types.

// Now create the following variables:

// Create a variable named regularUser of type UserProfile with id 1, displayName "john_doe", and preferredContact "john_doe"
// Create a variable named systemAdmin of type AdminProfile with id 2, displayName "admin", preferredContact 25, and permissions "full_access"
// Create a function named getContactInfo that accepts a parameter called contact of type ContactMethod and returns a string. Use a type guard to check the type and return:

// If it's a string: "Contact: [contact]"
// If it's a number: "Age: [contact]"
// Print the following outputs on separate lines:

// Call getContactInfo with regularUser.preferredContact and print the result
// Call getContactInfo with systemAdmin.preferredContact and print the result
// Print systemAdmin.permissions


type Username = string;
type UserAge = number;
type ContactMethod = Username | UserAge;
type UserProfile = { 
    id: number,
    displayName: Username,
    preferredContact: ContactMethod
};

type AdminProfile = UserProfile & { permissions: string };

// Create variables regularUser and systemAdmin

const regularUser: UserProfile = { 
    id: 1,
    displayName: "john_doe",
    preferredContact: "john_doe"
}

const systemAdmin: AdminProfile = { 
    id: 2,
    displayName: "admin",
    preferredContact: 25,
    permissions: "full_access"
}

// Create getContactInfo function

function getContactInfo(contact: ContactMethod): string{ 
 if(typeof contact === "string"){ 
    return `Contact: ${contact}`
 }
 return `Age: ${contact}`
};

console.log(getContactInfo(regularUser.preferredContact));
console.log(getContactInfo(systemAdmin.preferredContact));
console.log(systemAdmin.permissions);



// Create a type alias named Success for an object with a status property of literal type "success" and a data property of type any.

// Create a type alias named Failure for an object with a status property of literal type "error" and a message property of type string.

// Create a type alias named Result that is a union of the Success and Failure types.

// Create a function named processResult that accepts a parameter called result of type Result and returns a string. The function should use a type guard on the status property to determine the result type and behave as follows:

// If the status is "success", return "Operation successful: [data]"
// If the status is "error", return "Operation failed: [message]"
// Create another function named handleApiResponse that accepts a parameter called response of type Result and returns a boolean. The function should return true if the operation was successful and false if it failed.

// The following inputs will be provided:

// First input: a JSON string representing either a success result like {"status": "success", "data": "User created"} or a failure result like {"status": "error", "message": "Invalid credentials"}
// Second input: another JSON string in the same format
// Parse both JSON inputs as Result objects, then:

// Call processResult with the first parsed result and print the returned string
// Call handleApiResponse with the first parsed result and print the returned boolean
// Call processResult with the second parsed result and print the returned string
// Call handleApiResponse with the second parsed result and print the returned boolean



// import * as readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const input: string[] = [];

// TODO: Write your code here
// 1. Create type aliases for Success, Failure, and Result
type Success = { 
    status: "success",
    data: any
};
type Failure = { 
    status: "error",
    message: string
};
type Result = Success | Failure

// 2. Create the processResult function
function processResult(result: Result): string{ 
    if(result.status === "success"){ 
        return `Operation successfull: ${result.data}`
    }
    return `Operation failed: ${result.message}`
};

function handleApiResponse(response: Result): boolean{ 
    if(response.status === "success"){ 
        return true;
    }
    return false;
}





// 3. Create the handleApiResponse function

rl.on('line', (line: string) => {
    input.push(line.trim());
    if (input.length === 2) {
        // Parse the JSON inputs
        const result1 = JSON.parse(input[0]);
        const result2 = JSON.parse(input[1]);
        
        // 4. Call the functions with the parsed results and print the outputs
        console.log(processResult(result1));
        console.log(handleApiResponse(result1));
        console.log(processResult(result2));
        console.log(handleApiResponse(result2));
        
        rl.close();
    }
});


// Create a variable named student with an inline object type annotation that defines the following structure:

// name property of type string
// studentId property of type number
// isEnrolled property of type boolean
// Assign the variable the following values:

// name: "Sarah Johnson"
// studentId: 12345
// isEnrolled: true
// Create another variable named course with an inline object type annotation that defines the following structure:

// title property of type string
// credits property of type number
// instructor property of type string
// Assign the variable the following values:

// title: "Introduction to TypeScript"
// credits: 3
// instructor: "Dr. Smith"
// Print the following information on separate lines:

// The student's name
// The student's ID
// The course title
// The number of credits


const student: { name: string; studentId: number; isEnrolled: boolean } = { 
    name: "Sarah Johnson",
    studentId: 12345,
    isEnrolled: true
}
// Create the course variable with inline object type annotation
const course: { title: string; credits: number; instructor: string } = { 
    title: "Introduction to TypeScript",
    credits: 3,
    instructor: "Dr. Smith"
}
// Print the required information
console.log(student.name);
console.log(student.studentId);
console.log(course.title);
console.log(course.credits);



// Create a type alias named Book for an object with the following properties:

// title of type string
// author of type string
// pages of type number
// isAvailable of type boolean
// Create a type alias named Movie for an object with the following properties:

// title of type string
// director of type string
// duration of type number
// rating of type string
// Using your type aliases, create the following variables:

// Create a variable named novel of type Book with title "The Great Gatsby", author "F. Scott Fitzgerald", pages 180, and isAvailable true
// Create a variable named textbook of type Book with title "TypeScript Handbook", author "Microsoft", pages 450, and isAvailable false
// Create a variable named film of type Movie with title "Inception", director "Christopher Nolan", duration 148, and rating "PG-13"
// Create a function named getBookInfo that accepts a parameter of type Book and returns a string in the format "[title] by [author] - [pages] pages".

// Create a function named getMovieInfo that accepts a parameter of type Movie and returns a string in the format "[title] directed by [director] ([duration] min)".

// Print the following outputs on separate lines:

// Call getBookInfo with novel and print the result
// Call getBookInfo with textbook and print the result
// Call getMovieInfo with film and print the result
// Print the availability status of novel (the isAvailable property)



type Book = { title: string; author: string; pages: number; isAvailable: boolean };
type Movie = { title: string; director: string; duration: number; rating: string };

// Create variables using the type aliases
const novel: Book = {
     title: "The Great Gatsby",
     author: "F. Scoot Fitzgerald",
     pages: 180,
     isAvailable: true
};

const textbook: Book = { 
    title: "TypeScript Handbook",
    author: "Microsoft",
    pages: 450,
    isAvailable: false
};

const film: Movie = { 
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    rating: "PG-13"
};


// Create functions to get information
function getBookInfo(data: Book): string { 
    return `${data.title} by ${data.author} - ${data.pages} pages`
};

function getMovieInfo(data:Movie): string { 
    return `${data.title} directed by ${data.director} (${data.duration} min)`;
};

console.log(getBookInfo(novel));
console.log(getBookInfo(textbook));
console.log(getMovieInfo(film));
console.log(novel.isAvailable)




// Create an interface named Pet with the following properties:

// name of type string
// species of type string
// age of type number
// isVaccinated of type boolean
// Create an interface named Vehicle with the following properties:

// make of type string
// model of type string
// year of type number
// Using your interfaces, create the following variables:

// Create a variable named myDog of type Pet with name "Buddy", species "Golden Retriever", age 3, and isVaccinated true
// Create a variable named myCat of type Pet with name "Whiskers", species "Persian", age 2, and isVaccinated false
// Create a variable named myCar of type Vehicle with make "Toyota", model "Camry", and year 2022
// Create a function named describePet that accepts a parameter of type Pet and returns a string in the format "[name] is a [age]-year-old [species]".

// Create a function named getVehicleInfo that accepts a parameter of type Vehicle and returns a string in the format "[year] [make] [model]".

// Print the following outputs on separate lines:

// Call describePet with myDog and print the result
// Call describePet with myCat and print the result
// Call getVehicleInfo with myCar and print the result
// Print the vaccination status of myDog (the isVaccinated property)



// Create the Pet interface
interface Pet { 
    name: string,
    species: string,
    age: number,
    isVaccinated: boolean
};

// Create the Vehicle interface

interface Vehicle { 
    make: string,
    model: string,
    year: number
};

// Create the variables using your interfaces
const myDog: Pet = { 
    name: "Buddy",
    species: "Golder Retriever",
    age: 3,
    isVaccinated: true
};

const myCat: Pet = { 
    name: "Whiskers",
    species: "Persion",
    age: 2,
    isVaccinated: false
};

const myCar: Vehicle = { 
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// Create the describePet function
function describePet(data: Pet): string { 
    return `${data.name} is a ${data.age}-tear-old ${data.species}`
};


// Create the getVehicleInfo function
function getVehicleInfo(data: Vehicle):string { 
return `${data.year} ${data.make} ${data.model}`;

};

console.log(describePet(myDog));
console.log(describePet(myCat));
console.log(getVehicleInfo(myCar));
console.log(myDog.isVaccinated);


// Create an interface named Book with the following properties:

// title of type string (required)
// isbn of type string (readonly)
// subtitle of type string (optional)
// pages of type number (required)
// publishedYear of type number (readonly)
// genre of type string (optional)
// Create an interface named Magazine with the following properties:

// name of type string (required)
// issueNumber of type number (readonly)
// topic of type string (optional)
// monthlySubscription of type boolean (required)
// Using your interfaces, create the following variables:

// Create a variable named novel of type Book with title "1984", isbn "978-0-452-28423-4", pages 328, and publishedYear 1949
// Create a variable named cookbook of type Book with title "The Joy of Cooking", isbn "978-0-7432-4626-2", subtitle "All About Baking", pages 1132, publishedYear 2006, and genre "Cooking"
// Create a variable named techMag of type Magazine with name "Tech Today", issueNumber 45, and monthlySubscription true
// Create a variable named scienceMag of type Magazine with name "Science Weekly", issueNumber 12, topic "Climate Change", and monthlySubscription false
// Create a function named getBookDetails that accepts a parameter of type Book and returns a string. The function should return the book's title and pages in the format "[title] - [pages] pages".

// Create a function named getMagazineInfo that accepts a parameter of type Magazine and returns a string. The function should return the magazine's name and issue number in the format "[name] Issue #[issueNumber]".

// Print the following outputs on separate lines:

// Call getBookDetails with novel and print the result
// Call getBookDetails with cookbook and print the result
// Call getMagazineInfo with techMag and print the result
// Call getMagazineInfo with scienceMag and print the result
// Print the ISBN of novel
// Print the subscription status of techMag (the monthlySubscription property)


interface Book { 
    title: string,
    readonly isbn: string,
    subtitle?: string,
    pages: number,
    readonly publishedYear: number,
    genre?: string
};

// Create the Magazine interface
interface Magezine { 
    name: string,
    readonly issueNumber: number,
    topic?: string,
    monthlySubscirption: boolean
};

// Create the variables using your interfaces
const novel: Book = { 
    title: "1984",
    isbn: "978-0-452-28423-4",
    pages: 328,
    publishedYear: 1949
};

const cookbook: Book = { 
    title: "The Joy of Cooking",
    isbn: "978-0-7432-4626-2",
    subtitle: "All About Baking",
    pages: 1132,
    publishedYear: 2006,
    genre: "Cooking"
};

const techMag: Magezine = { 
    name: "Tech Today",
    issueNumber: 45,
    monthlySubscirption: true
};

const scienceMag: Magezine = { 
    name: "Science Weekly",
    issueNumber: 12,
    topic: "Climate Change",
    monthlySubscirption: false
};

// Create the getBookDetails function
function getBookDetails(data: Book): string { 
    return `${data.title} - ${data.pages} pages`
};

// Create the getMagazineInfo function
function getMagezineInfo(data: Magezine):string { 
   return `${data.name} Issue #${data.issueNumber}`
}

// Print the required outputs
console.log(getBookDetails(novel));
console.log(getBookDetails(cookbook));
console.log(getMagezineInfo(techMag));
console.log(getMagezineInfo(scienceMag));
console.log(novel.isbn);
console.log(techMag.monthlySubscirption);



// Create a base interface named Employee with the following properties:

// id of type number
// name of type string
// department of type string
// Create an interface named Manager that extends Employee and adds the following properties:

// teamSize of type number
// budget of type number
// Create a type alias named Contact with the following properties:

// email of type string
// phone of type string
// Create a type alias named Developer using intersection types that combines Employee and Contact, and adds the following properties:

// programmingLanguages of type string[]
// yearsExperience of type number
// Using your interfaces and types, create the following variables:

// Create a variable named teamLead of type Manager with id 101, name "Alice Johnson", department "Engineering", teamSize 8, and budget 250000
// Create a variable named softwareDev of type Developer with id 102, name "Bob Smith", department "Engineering", email "bob.smith@company.com", phone "555-0123", programmingLanguages ["TypeScript", "Python", "Java"], and yearsExperience 5
// Create a function named getManagerSummary that accepts a parameter of type Manager and returns a string in the format "[name] manages [teamSize] people with a budget of $[budget]".

// Create a function named getDeveloperSkills that accepts a parameter of type Developer and returns a string in the format "[name] knows [programmingLanguages joined with ', '] ([yearsExperience] years experience)".

// Print the following outputs on separate lines:

// Call getManagerSummary with teamLead and print the result
// Call getDeveloperSkills with softwareDev and print the result
// Print the department of teamLead
// Print the email of softwareDev


interface Employee { 
    id: number,
    name: string,
    department: string
};

// Create the Manager interface that extends Employee
interface Manager extends Employee { 
    teamSize: number,
    budget: number
};

// Create the Contact type alias
type Contact = { 
    email: string,
    phone: string
};

// Create the Developer type alias using intersection types
type Developer = Employee & Contact & { 
    programmingLanguages: string[],
    yearsExperience: number
};

// Create the teamLead variable of type Manager
const teamLead: Manager = { 
    id: 101,
    name: "Alice Johnson",
    department: "Engineering",
    teamSize: 8,
    budget: 250000
}

// Create the softwareDev variable of type Developer
const softwareDev: Developer = { 
    id: 102,
    name: "Bob Smith",
    department: "Engineering",
    email: "bob.smith@company.com",
    phone: "555-0123",
    programmingLanguages: ["TypeScript", " Python", " Java"],
    yearsExperience: 5
};

// Create the getManagerSummary function
function getManagerSummary(data: Manager):string { 
    return `${data.name} manages ${data.teamSize} people with a budget of $${data.budget}`
};

// Create the getDeveloperSkills function
function getDeveloperSkills(data: Developer):string { 
    return `${data.name} knows ${data.programmingLanguages} (${data.yearsExperience} years experience)`
}

// Print the required outputs
console.log(getManagerSummary(teamLead));
console.log(getDeveloperSkills(softwareDev));
console.log(teamLead.department);
console.log(softwareDev.email);



