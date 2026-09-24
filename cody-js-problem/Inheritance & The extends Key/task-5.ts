// Create a Cake class that extends Dessert and export it. The Cake should have:

// All inherited properties and methods from Dessert
// A new property flavor
// A new method addCandles() that returns a string “Added candles to ${this.name}!”


export class Dessert {
  name: string;
  calories: number;
  constructor(name: string, calories: number) {
    this.name = name;
    this.calories = calories;
  }
  
  describe() {
    return `${this.name} has ${this.calories} calories`;
  }
}

// TODO: Create the Cake class that extends Dessert and export it
export class Cake extends Dessert { 
// TODO: Add a constructor function with 3 properties: name, calories, flavor
    constructor(name, calories, flavor){ 
// TODO: Call super() with name and calories
        super(name, calories);
// TODO: Add a new property called 'flavor'
        this.flavor = flavor;
    }
    
    // TODO: Add an 'addCandles()' method that returns a string saying `Added candles to ${this.name}!`
    addCandles() { 
        return `Added candles to ${this.name}!`;
    }
}



