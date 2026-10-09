
import { Shape } from './Shape.js'
import { Circle } from './Circle.js';

const basicShape = new Shape('red');
console.log(basicShape.describe()); // "A red shape"

const myCircle = new Circle('blue', 10);
console.log(myCircle.describe());
