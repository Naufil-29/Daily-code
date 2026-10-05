import { ShoppingCart } from './shoppingCart.js';

// Test code - don't modify
console.log(ShoppingCart.currency);                // Should output "USD"
console.log(ShoppingCart.calculateTax(100));       // Should output 8 (100 * 0.08)

const cart = new ShoppingCart();
console.log(cart.addItem(25));                     // Should output 25
console.log(cart.addItem(50));                     // Should output 75
console.log(ShoppingCart.calculateTax(cart.total)); // Should output 6 (75 * 0.08)
