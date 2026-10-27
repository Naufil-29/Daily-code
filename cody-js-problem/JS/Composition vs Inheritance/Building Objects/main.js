import { SmartBulb } from './SmartBulb.js';

const bedroomLight = new SmartBulb('warm white');

console.log('1. Activating light:');
bedroomLight.activate();

console.log('\n2. Adjusting brightness:');
bedroomLight.adjustBrightness(75);
