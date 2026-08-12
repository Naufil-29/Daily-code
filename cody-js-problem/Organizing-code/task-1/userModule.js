// You have two modules already connected: user-module.js and game-module.js.

// Your task is to call the addPoints function with the value 10 in user-module.js.

// Expected Output:

// Score increased! Current score: 10

import { addPoints } from './game-module.js';
let user = "John";

const result = addPoints(10);