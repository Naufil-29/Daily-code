// TODO: Create the VendingMachine class and export it 
export class VendingMachine { 
// TODO: Add a constructor that takes location (string) and drinks (number) parameters
    constructor(location, drinks){ 
        this.location = location;
        this.drinks = drinks;
    }
// TODO: Add getStatus() method that returns a string like "Cafe machine: 15 drinks left"
    getStatus() { 
        return `Cafe machine: ${this.drinks} drinks left`;
    }
}