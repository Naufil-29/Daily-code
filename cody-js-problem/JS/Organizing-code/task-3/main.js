// You're building a signup form. You have a file validation-utils.js that contains useful email validation functions.

// Your task:

// Import the validateEmail function in main.js (It is the named export, not the default export)
// Call the function and pass the user@example.com email address
// Print the results using console.log

import { validateEmail } from "./validation-utils.js";

const result = validateEmail("user@example.com");
console.log(result);