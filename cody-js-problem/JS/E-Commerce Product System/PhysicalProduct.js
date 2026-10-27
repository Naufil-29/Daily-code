import { Product } from './Product.js';

export class PhysicalProduct extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  
  getDescription() {
    return `${this.name} - $${this.price} (${this.weight} lbs)`;
  }
  
  calculateShipping() { 
    const shippingCost = this.weight * 0.5;
    return shippingCost;
  }
  
}