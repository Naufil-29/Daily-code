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





// Create a tuple named employee that holds a number (employee ID) followed by a string (employee name). Initialize it with the ID 1001 and the name "Sarah Johnson".
// Use destructuring to extract the values from the employee tuple into two separate variables named empId and empName.
// Create another tuple named coordinates that holds two numbers representing latitude and longitude coordinates. Initialize it with the values 40.7128 and -74.0060.
// Use destructuring to extract the values from the location tuple into two separate variables named latitude and longitude.
// Print the destructured variables in the following order, each on a separate line:
// Print the employee ID
// Print the employee name
// Print the latitude
// Print the longitude

// TODO: Write your code here
// Create the employee tuple with ID 1001 and name "Sarah Johnson"
const employee: [number, string] = [1001, "Sarah Johnson"];
// Use destructuring to extract empId and empName
const [empId, empName] = employee;
// Create the coordinates tuple with values 40.7128 and -74.0060 (avoid using 'location' as variable name)
const coordinate: [number, number] = [40.7128, -74.0060];
// Use destructuring to extract latitude and longitude
const [latitude, longitude] = coordinates;
// Print all four variables in the specified order
console.log(empId);
console.log(empName);
console.log(latitude);
console.log(longitude);




// Create a readonly tuple named startPointthat represents a 2D point with two numbers (x and y coordinates). Initialize it with the values 0 and 0.
// Create another readonly tuple named colorRGB that represents an RGB color value with three numbers (red, green, blue). Initialize it with the values 255, 128, and 64.
// Create a third readonly tuple named userRecord that holds a number (user ID), a string (username), and a boolean (active status). Initialize it with the values 42, "admin", and true.
// Print all three readonly tuples to the console on separate lines in the order they were created.


// Create the readonly tuples as described in the challenge
const startPoint: readonly [number, number] = [0, 0];
const colorRGB: readonly [number, number, number] = [255, 128, 64];
const userRecord: readonly [number, string, boolean] = [42, "admin", true];

// Print all three tuples
console.log(startPoint);
console.log(colorRGB);
console.log(userRecord);


