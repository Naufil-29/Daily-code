// Base class
export class Furniture {
  constructor(material, color) {
    this.material = material;
    this.color = color;
  }
  
  describe() {
    return `${this.color} ${this.material} furniture`;
  }
}
