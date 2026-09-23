// Create a Student class that extends the Person class using the extends keyword and export it.

class Person {
  name: any;
  constructor(name: any) {
    this.name = name;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

// TODO: Create class Student that extends Person and export it

export class Student extends Person { 

}