// You're given an ElectronicDevice class and a Smartphone class. A Smartphone is a type of ElectronicDevice with additional features. Your task is to create a `myPhone` object with brand "Samsung" and model “Galaxy S23”.

import { ElectronicDevice } from './electronicDevice.js';
import { Smartphone } from './smartphone.js';


// TODO: Create a `myPhone` object with brand "Samsung" and model “Galaxy S23”.
const myPhone = new Smartphone("Samsung", "Galaxy S23");

// Test code - don't modify
console.log(myPhone.turnOn());  // Should output "Samsung Galaxy S23 is now ON"