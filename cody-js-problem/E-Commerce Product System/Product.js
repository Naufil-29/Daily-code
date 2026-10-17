// This is an online store product system. Products have prices, and physical products (like laptops) calculate shipping based on their weight. Digital products (like ebooks) would have free shipping.

// Your task is to complete the missing methods in the product system:

// 1: Complete the Product class in product.js:

// Add method getPrice() that returns this.#price
// Add method getDescription() that returns ${this.name} - $${this.#price}
// 2: Complete the PhysicalProduct class in physicalProduct.js:

// Add method calculateShipping() that:
// Calculates this.weight * 0.5 (50 cents per pound)
// Returns the shipping cost


export class Product {
  #price; // Private field for encapsulation
  
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
  
  // Getter for price
  get price() {
    return this.#price;
  }
  
  // Setter with validation
  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log('Price must be positive');
    }
  }
  
    getPrice() { 
        return this.#price;
    }

    getDescription(){ 
        return `${this.name} - $${this.#price}`;
    }
}