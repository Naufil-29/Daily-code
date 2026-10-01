import { Calculator } from './calculator.js';


// Don't modify the code below
const calc = new Calculator(5);        // Creates calculator with value = 5
const result1 = calc.add(3);           // Should add 3 → 5 + 3 = 8
const result2 = Calculator.multiply(4, 6); // Should multiply 4 × 6 = 24
console.log(result1);                   // Expected: 8
console.log(result2);                   // Expected: 24