export class Memory {
  constructor(size) {
    this.size = size;
  }
  
  load() {
    console.log(`Loading ${this.size} GB of data`);
  }
}