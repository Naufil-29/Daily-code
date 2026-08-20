// You're given a Student class. Your task is to create two student instances in the driver.js file:

// Create student1 with name "Sarah" and grade 85
// Create student2 with name "Mike" and grade 92

import { Student } from './student.js';

const student1 = new Student("Sarah", 85);
const student2 = new Student("Mike", 92)

// Test code - don't modify
console.log(student1.name);  // Should output "Sarah"
console.log(student2.grade); // Should output 92