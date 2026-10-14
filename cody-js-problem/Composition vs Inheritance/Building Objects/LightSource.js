export class LightSource {
  constructor(color) {
    this.color = color;
  }
  
  turnOn() {
    console.log(`${this.color} light is ON`);
  }
  
  turnOff() {
    console.log('Light is OFF');
  }
}