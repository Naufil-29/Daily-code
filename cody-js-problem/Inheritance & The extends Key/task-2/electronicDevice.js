 export class ElectronicDevice {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  turnOn() {
    return `${this.brand} ${this.model} is now ON`;
  }
}