// You're given a ShoppingCart class. Your task is to add:

// Static properties:
// taxRate set to 0.08 (8% tax)
// currency set to "USD"
// Static method:
// calculateTax(amount) that returns amount * taxRate

export class ShoppingCart {
   // TODO: Add a static property called taxRate and set it to 0.08 (8% tax)
    static taxRate = 0.08;
   // TODO: Add a static property called currency and set it to "USD"
    static currency = "USD";
   // TODO: Add a static method called calculateTax(amount) that returns amount * ShoppingCart.taxRate
    static calculateTax(amount){ 
        return amount * ShoppingCart.taxRate;
    }
  constructor() {
    // Initialize instance properties items and total
    this.items = [];
    this.total = 0;
  }
  
  // Add instance method addItem
  addItem(price) {
    this.total += price;
    this.items.push(price);
    return this.total;
  }
}