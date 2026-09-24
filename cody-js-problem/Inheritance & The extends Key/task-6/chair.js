// Create Furniture Classes Using Inheritance

// Task 1: Create a Chair Class
// Create a Chair class that extends Furniture:

// Use super() in the constructor to inherit material and color from the parent class
// Add property: numberOfLegs
// Add method: sit() that returns "Sitting on the chair"
// Task 2: Create a Table Class
// Create a Table class that extends Furniture:

// Use super() in the constructor to inherit material and color from the parent class
// Add property: shape
// Add method: placeItem() that returns "Item placed on table"

import { Furniture } from './furniture.js';

// TODO: Create a Chair class that extends Furniture and export it
export class Chair extends Furniture { 
// TODO: Add the constructor function 
    constructor(material, color, numberOfLegs){ 
// TODO: Use super() in the constructor to inherit material and color and add a new property: numberOfLegs
        super(material, color)
        this.numberOfLegs = numberOfLegs;
    }
// TODO: Add method: sit() that returns "Sitting on the chair"
    sit(){ 
        return "Sitting on the chair"
    }
}

