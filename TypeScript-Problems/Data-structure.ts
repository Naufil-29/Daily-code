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


// Create a 2D array named gameGrid that can hold numbers and initialize it as a 3x3 matrix with the following values:
// First row: 1, 2, 3
// Second row: 4, 5, 6
// Third row: 7, 8, 9
// Create another 2D array named chessBoard that can hold strings and initialize it as a 2x2 matrix with the following values:
// First row: "white", "black"
// Second row: "black", "white"
// Access and print the element at the second row, first column of the gameGrid array.
// Access and print the element at the first row, second column of the chessBoard array.
// Print each value on a separate line in the order specified above.


// Create the gameGrid 2D array (3x3 matrix with numbers 1-9)
const gameGrid = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Create the chessBoard 2D array (2x2 matrix with string values)
const chessBoard = [ 
    ["white", "black"],
    ["black", "white"]
]

// Access and print the element at second row, first column of gameGrid
console.log([1][0]);

// Access and print the element at first row, second column of chessBoard
console.log([0][1]);




// Create two typed arrays: firstScores containing the numbers 85, 92, and 78, and secondScores containing the numbers 88, 95, and 82.
// Use the spread operator to combine both arrays into a new array called allScores.
// Create another typed array called bonusPoints containing the numbers 5 and 10.
// Use the spread operator to create a final array called finalScores that combines allScores with bonusPoints, but also includes the individual number 100 at the beginning and the number 90 at the end.
// Print the finalScores array to the console.

const firstScores: number[] = [85, 92, 78];
const secondScores: number[]= [88, 95, 82];
const allScores: number[] = [...firstScores, ...secondScores];
const bonusPoints: number[] = [5, 10];
const finalScores: number[] = [100, ...allScores, ...bonusPoints, 90];

console.log(finalScores);


// Create a function named addToShoppingList that takes two parameters: a tuple of type [string, number] representing an item (name and quantity), and an array of strings representing the current shopping list.
// The function should extract the item name from the tuple and add it to the shopping list array. The function should return the updated shopping list as a new array (without modifying the original array).
// Test your function with the following data:
// Create a tuple named groceryItem with the values "apples" and 5
// Create an array named currentList with the values ["bread", "milk", "eggs"]
// Call your function with these parameters and store the result in a variable named updatedList
// Print the updated shopping list to the console.
// Then test the function again with:
// Create another tuple named bakeryItem with the values "cookies" and 2
// Call your function using the updatedList from the previous step and the new bakeryItem
// Store this result in a variable named finalList
// Print the final shopping list to the console.

const groceryItem: [string, number] = ["apples", 5];
const currentList: string[] = ["bread", "milk", "eggs"];
let newList = [];

function addToShoppingList(groceryItem: [string, number], currentList: string[]){ 
    let itemName = groceryItem[0];
    newList = [...currentList, itemName];
    return newList;
    
}

const bakeryItem: [string, number] = ["cookies", 2];
addToShoppingLis(groceryItem, currentList);
addToShoppingLis(bakeryItem, currentList);

