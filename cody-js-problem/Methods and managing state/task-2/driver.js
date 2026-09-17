import { calculator } from './calculator.js';

// Test code - don't modify
const result1 = calculator.add(10).multiply(2).getValue();
console.log(result1); // Should output 20

// Reset for second test
calculator.value = 0;
const result2 = calculator.add(20).divide(4).subtract(1).getValue();
console.log(result2); // Should output 4