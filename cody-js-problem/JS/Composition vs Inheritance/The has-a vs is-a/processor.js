export class Processor {
  constructor(speed) {
    this.speed = speed;
  }
  
  compute() {
    console.log(`Processing at ${this.speed} GHz`);
  }
}