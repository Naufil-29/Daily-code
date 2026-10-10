// You're given a User class with an age property. Your task is to add a getter and setter for age that:

// Getter get age(): returns the stored age
// Setter set age(newAge): validates that age is between 0 and 120
// If valid (0-120): store it in this._age
// If invalid: don't change it and log "Invalid age!"


export class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;  // Store age privately
  }
  

  get age() { 
    return this._age;
  }
  set age(value){ 

    if(value < 0 || value > 120){ 
      console.log("Invalid age!");
      return;
    }

    this._age = value;
  }

}