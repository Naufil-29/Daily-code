// Create a readonly array named configValues that can only hold strings and initialize it with the values "production", "database", and "cache".
// Then create another readonly array named ports that can only hold numbers and initialize it with the values 3000, 5432, and 6379.
// Finally, create a readonly array named features that can only hold boolean values and initialize it with true, false, and true.
// Print all three readonly arrays to the console on separate lines in the order they were created.

const configvalues: readonly string[] = ["production", "database", "cache"];
const ports: readonly number[] = [3000, 5432, 6379];
const features: readonly boolean[] = [true, false, true];

console.log(configvalues);
console.log(ports);
console.log(features);


// Create a tuple named productInfo that holds a string (product name) followed by a number (price). Initialize it with the product name "Gaming Mouse" and the price 79.
// Then create another tuple named coordinates that holds two numbers representing x and y positions. Initialize it with the values 15 and 25.
// Access and print the product name from the productInfo tuple.
// Access and print the price from the productInfo tuple.
// Access and print the x coordinate from the coordinates tuple.
// Access and print the y coordinate from the coordinates tuple.
// Print each value on a separate line in the order specified above.

// TODO: Write your code here
// Create the productInfo tuple with product name and price
const productInfo: [string, number] = ["Gaming Mouse", 79];
// Create the coordinates tuple with x and y positions
const coordinates: [number, number] = [15, 25];
// Access and print each value as specified

console.log(productInfo[0]);
console.log(productInfo[1]);
console.log(coordinates[0]);
console.log(coordinates[1]);