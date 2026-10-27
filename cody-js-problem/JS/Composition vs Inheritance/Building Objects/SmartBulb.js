// Complete the SmartBulb methods in the SmartBulb.js file.

// Implement the activate() method to turn on the light.
// Implement the adjustBrightness() method to set the brightness and log exactly: Brightness set to ${this.brightness.level}%

// Import the components
import { LightSource } from './LightSource.js';
import { BrightnessController } from './BrightnessController.js';

export class SmartBulb {
  constructor(color) {
    // Create instances of the two components
    this.light = new LightSource(color);
    this.brightness = new BrightnessController();
  }
  
  activate() {
    this.light.turnOn();
  }
  
  adjustBrightness(level) {
    this.brightness.setBrightness(level);
  console.log(`Brightness set to ${this.brightness.level}%`)
  }

}