// You have two files. Your task is to set up the exports in calculator.js and imports in main.js.
// In calculator.js: Export calculate as default and square as named
// In main.js: Import both functions correctly
// Tests will check:

// Default export used for calculate
// Named export used for square
// Both imports work correctly


import calculate, { square } from "./calculator.js"

// Test
console.log(calculate(10, 5, '+')); 
console.log(square(4));  