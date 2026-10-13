// You're given the component classes (Processor, Memory) and most of the Computer class. Your task is to complete the constructor in the computer.js file:

// Create a processor property using the Processor class
// Create a memory property using the Memory class
// Pass processorSpeed to the Processor constructor and memorySize to the Memory constructor


import { Processor } from './processor.js';
import { Memory } from './memory.js';

export class Computer {
  constructor(processorSpeed, memorySize) {
      
    this.processor = new Processor(processorSpeed);
    this.memory = new Memory(memorySize);

  }
  
  start() {
    console.log('Computer starting up...');
    this.processor.compute();
    this.memory.load();
  }
}