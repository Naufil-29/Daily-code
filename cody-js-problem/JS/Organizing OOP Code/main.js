// You have an electronics store system organized into modules. The Laptop and Smartphone classes are created in separate files but need to be made available to other files.

// Your task:

// Export the classes (use named exports - not default):
// In laptop.js: Add export to make the Laptop class available
// In smartphone.js: Add export to make the Smartphone class available
// Import the classes in main.js:
// Import the Laptop class from laptop.js
// Import the Smartphone class from smartphone.js

// TODO: Import the Laptop class from laptop.js
import { Laptop } from './laptop.js';
// TODO: Import the Smartphone class from smartphone.js
import { Smartphone } from './smartphone.js';

const myLaptop = new Laptop();
const myPhone = new Smartphone();

console.log(myLaptop.type);      // Outputs: "laptop"
console.log(myPhone.type); 