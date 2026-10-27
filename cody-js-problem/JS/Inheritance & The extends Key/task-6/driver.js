import { Furniture } from './furniture.js';
import { Table } from './table.js';
import { Chair } from './chair.js';


// Test code - don't modify
const myChair = new Chair("wood", "brown", 4);
console.log(myChair.describe());   // Should output "brown wood furniture"
console.log(myChair.numberOfLegs); // Should output 4
console.log(myChair.sit());        // Should output "Sitting on the chair"

const myTable = new Table("glass", "clear", "round");
console.log(myTable.describe());   // Should output "clear glass furniture"
console.log(myTable.shape);        // Should output "round"
console.log(myTable.placeItem());  // Should output "Item placed on table"