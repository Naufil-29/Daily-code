// In this challenge you have to add static tracking to the SmartDevice system so we can monitor how many devices are in our smart home.

// 1. Add static property to SmartDevice class:

// Add: static totalDevices = 0; at the top of the class
// 2. Increment the counter in constructor:

// In the SmartDevice constructor, add: SmartDevice.totalDevices++;
// 3. Add static method to get count:

// Add: static getDeviceCount() { return SmartDevice.totalDevices; }


import { SmartDevice } from './Device.js';

console.log(`Device count: ${SmartDevice.getDeviceCount()}`); // Should be 0

const basicDevice1 = new SmartDevice('Smart Plug');
const basicDevice2 = new SmartDevice(' Thermostat');
console.log(`Total devices now: ${SmartDevice.getDeviceCount()}`); // Should be 2
