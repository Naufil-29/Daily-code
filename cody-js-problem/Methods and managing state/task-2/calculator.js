
export const calculator = {
  value: 0,
  
  add(n) {
    this.value += n;
    return this;
  },
  
  subtract(n) {
    this.value -= n;
    return this;
  },
  
  // TODO: Add multiply method here
  multiply(n) { 
    this.value *= n;
    return this;
  },
  
  // TODO: Add divide method here
  divide(n) { 
    this.value /= n;
    return this;
  },
  
  getValue() {
    return this.value;
  }
};