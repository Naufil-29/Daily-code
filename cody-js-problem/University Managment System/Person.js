// In this challenge, we have a university system with different types of people (students, professors) who have different roles and behaviors.

// 1. Complete Person class:

// Add introduce() method returning "Hi, I'm ${name}"
// 2. Complete Student class:

// Override introduce() to return ${super.introduce()}, a ${this.major} student. Example: "Hi, I'm Alice, a Computer Science student"
// Add addGrade(grade) method that takes a grade between 0 and 100
// Validation: Check if grade is between 0 and 100
// If valid: Add to this.grades array
// If invalid: Log: "Grade must be between 0 and 100"
// 3. Complete Professor class:

// Override introduce() to return “Prof. ${name} from ${department}”. Example: “Prof. Smith from Computer Science”


export class Person {
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() { 
    return `Hi, I'm ${this.name}`
  }
}