// You have two files main.js and weather-utils.js. Your task:

// In weather-utils.js: Add the export keyword to make the getWeatherMessage function available to other files
// In main.js: Call the imported getWeatherMessage function with temperature 15 and print the result using console.log

import { getWeatherMessage } from './weather-utils.js';

const result = getWeatherMessage(15);
console.log(result);