export class BrightnessController {
  constructor() {
    this.level = 50; // Default 50% brightness
  }
  
  setBrightness(level) {
    this.level = Math.max(0, Math.min(100, level)); // Keep between 0-100
  }
}