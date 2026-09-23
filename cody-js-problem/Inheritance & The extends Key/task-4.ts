// Given a Salad class that extends Meal. The Salad should have both a name and ingredients.

// Your task is to complete the Salad class constructor by:

// Calling super() with the name property
// Setting the ingredients property


export class Meal {
  name: any;
  constructor(name: any) {
    this.name = name;
  }
}

export class Salad extends Meal {
  ingredients: any;
  constructor(name: any, ingredients: any) {
  // TODO: Add super() call here
  super(name)
  // TODO: Set ingredients property here
  this.ingredients = ingredients;
  }
}