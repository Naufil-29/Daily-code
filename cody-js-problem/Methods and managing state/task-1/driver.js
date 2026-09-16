import { Thermostat } from './thermostat.js';

// Test code - don't modify
const livingRoom = new Thermostat("Living Room", 20);

livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.currentTemp); // Should output 22

livingRoom.decreaseTemp();
console.log(livingRoom.currentTemp); // Should output 21
