// In this project, we'll build a simple shape rendering system that demonstrates key Object-Oriented Programming concepts. We'll create different shapes that can describe themselves, practice inheritance, and organize our code using modules.

// Your task:

// In `Shape.js`, create a `Shape` class with:
// A constructor that takes one parameter: color
// A method called describe() that returns: "A ${color} shape"
// Export the class using export
// In main.js, import the class using: import { Shape } from './Shape.js';

// Modify the Shape class to track how many shapes have been created using static properties and methods.

// Your task:

// Add a static property called totalShapes initialized to 0
// Increment the counter in the constructor: Shape.totalShapes++;
// Add a static method called getTotalCreated() that returns the current count of total shapes
    
    
    export class Shape{ 
        constructor(color){ 
            this.color = color;
            Shape.totalShapes++;
        }

        describe(){ 
            return `A ${this.color} shape`;
        }

        static getTotalCreated(){ 
            return Shape.totalShapes;
        }
    }