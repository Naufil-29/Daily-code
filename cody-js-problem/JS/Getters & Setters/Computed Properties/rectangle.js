// You're given a Rectangle class with width and height properties. Your task is to add computed properties for area and perimeter.

// Computed property area - returns width × height
// Computed property perimeter - returns 2 × (width + height)

export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area(){ 
    return this.width * this.height;
  }
 
  get perimeter() { 
    return 2 * (this.width + this.height);
  }
}