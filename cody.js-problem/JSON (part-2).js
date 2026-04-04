// let obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   job: "developer",
//   salary: 75000
// }

// let keysToRemove = ["job", "salary"]


// function removeKeyFromObj (obj, keysToRemove) { 
//     let deletedKeys = keysToRemove;
//     let object1 = obj;
    
//     for (let i = 0; i < deletedKeys.length; i++){ 
//         delete object1[deletedKeys[i]]
//     }
//     console.log(object1)
// }

// removeKeyFromObj(obj, keysToRemove)


// Create a function named filterObject that:

// Takes an object and an array of keys to keep
// Returns a new object containing only the specified keys from the original object
// Important: Do not modify the original object

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   job: "Developer"
// };

// const keysToKeep = ["name", "job"]

// function filterObject(obj, arr){ 
//   let newObj = {};

//   for(const key of arr){ 
//     if(key in obj){ 
//         newObj[key] = obj[key]
//     }
//   }

//   console.log(newObj)   
// }


// filterObject(person, keysToKeep)


// Create a function named petShelterManager that helps manage a pet shelter system. The function receives two parameters:

// shelterData (an array of objects containing information about pets)
// newData (an object containing new data)
// The shelterData array contains objects with the following structure:

// {
//   id: "unique-id",
//   name: "pet-name",
//   type: "animal-type",
//   age: number,
//   isVaccinated: boolean,
//   adoptionStatus: "available" | "adopted"
// }
// Your function should do the following:

// Add the newData object to the shelterData array
// Before adding, verify that all required fields (id, name, type, age, isVaccinated, adoptionStatus) exist in newData
// If a field is missing, do not add the newData
// Return the updated shelterData array



// const newData = {
//   id: "a-1",
//   name: "fluffy",
//   type: "dog",
//   age: 5,
//   isVaccinated: true,
//   adoptionStatus: "available" 
// }

// const shelterData = [{ 
//   id: "a-2",
//   name: "pixel",
//   type: "cat",
//   age: 5,
//   isVaccinated: true,
//   adoptionStatus: "adopted" 
// }];

// function petShelterManager(obj){ 
//     let newData = obj;
//     const verifyList = ["id", "name", "type", "age", "isVaccinated", "adoptionStatus"];
//     const hasAllKeys = verifyList.every(key => key in newData);

//     if(hasAllKeys){ 
//         shelterData.push(newData)
//     }

//     console.log(shelterData)
// }

// petShelterManager(newData)


// Create a function named analyzeCarData that takes a JSON object as input. The object contains data about a car dealership's inventory where:

// keys are the car models
// values are the prices
// The function should return an object containing:

// mostExpensive: the name of the most expensive car
// cheapest: the name of the cheapest car
// averagePrice: the average price of all car

// const carData = {   
//   "Rolls-Royce Phantom": 460000,   
//   "Bentley Continental GT": 202500,   
//   "Porsche 911 GT3": 169700 ,
//   "Mercedes-Maybach S680": 229000,   
//   "Aston Martin DB11": 205600,   
//   }

// function analyzeCarData(obj){ 

//   let mostExpensive = 0;
//   let mostExpensiveCarName = "";
//   let mostCheapestCarName = "";
//   let mostCheapest = Infinity;
//   const newObj = {}

//   for (const [k,v] of Object.entries(obj)){ 
//     if(v >= mostExpensive){ 
//       mostExpensiveCarName = k,
//       mostExpensive = v
      
//     }

//     if(v <= mostCheapest){ 
//       mostCheapest = v
//       mostCheapestCarName = k
//       }
//   }
//   const values = Object.values(obj);
//   let sum = values.reduce((acc, curr) => acc + curr, 0);
//   let avg = sum / values.length;

//   newObj["mostExpensive"] = mostExpensiveCarName
//   newObj["mostCheapest"] = mostCheapestCarName
//   newObj["averagePrice"] = avg;
  
//   console.log(newObj);
// }

// analyzeCarData(carData)



// Create a function named calculateRestaurantBill that takes a JSON object representing a restaurant order as input. Each key in the object is a dish name, and each value is another object containing:
// price (number)
// quantity (number)
// isSpecialOffer (boolean) 
// if true, there's a 20% discount on that dish The function should:

// Calculate the total bill
// Apply any special offer discounts
// The returned object contains:

// totalBeforeDiscount
// totalDiscount
// finalTotal
// (All values are rounded to 2 decimal places)


// const order = {
//   "Sushi Platter": {"price": 45.99, "quantity": 2, "isSpecialOffer": true}, 
//   "Green Tea": {"price": 3.50, "quantity": 4, "isSpecialOffer": false}, 
//   "Miso Soup": {"price": 2.99, "quantity": 3, "isSpecialOffer": true}
// }

// function calculateRestaurantBill(order){ 
//   let totalBeforeDiscount = 0;
//   let totalDiscount = 0;

//   for(const item of Object.values(order)){ 
//     let itemTotal = item.price * item.quantity;
//     totalBeforeDiscount += itemTotal;

//     if(item.isSpecialOffer){ 
//       let discount = itemTotal * 0.2
//       totalDiscount += discount
//     }
//   }

//   let finalTotal = totalBeforeDiscount - totalDiscount
//   console.log(totalBeforeDiscount, totalDiscount, finalTotal)
// }

// calculateRestaurantBill(order)



// Create a function named processCart that takes a JSON string representing a shopping cart. The cart contains an array of products with names and prices. Your task is to:

// Parse the JSON string into a JavaScript object
// Create TWO separate carts from it
// In the second cart:
// Add a discounted property to each item set to false
// Apply a 10% discount to all items that have price greater than 50
// Set 'discounted' to true for items that received the discount
// Return an array containing both carts


// const shoppingCart = [
//   {"name": "Laptop", "price": 999}, 
//   {"name": "Mouse", "price": 25}, 
//   {"name": "Keyboard", "price": 60}
// ]

// function processCart(jsonString){ 
//   let originalObject = JSON.parse((jsonString));
//   let discountedObject = JSON.parse((jsonString));
//   let discounted = false;

//   for(let i = 0; i < discountedObject.length; i++){ 
//     let newObj = discountedObject[i];
//     if(newObj.price > 50){ 
//       newObj["discounted"] = true;
//       newObj.price = newObj.price - (newObj.price * 10 / 100);
//     }
//     else{
//     newObj["discounted"] = discounted;
//     }
//   }
//   return[originalObject, discountedObject]
// }

// let bill = processCart(shoppingCart)
// console.log("bill = ", bill)


// Create a function named updateBikeInventory that takes one argument, a JSON string inventoryStr.
// Parse it into an object, where inventoryStr has a bikes array. Each bike has brand, price, and quantity.
// If a bike's quantity is less than 3, add or update a key note with the value "Restock needed" for that bike.
// Return the updated object as a JSON string.

// const bikeInventory = {
//   "bikes": [
//     {"brand": "Trek", "price": 999.99, "quantity": 2}, 
//     {"brand": "Giant", "price": 799.99, "quantity": 5}
//   ]
// }

// function updateBikeInventory(inventoryStr){ 
//   let updatedObj = JSON.parse(JSON.stringify(inventoryStr));
  
//   for(let i = 0; i < updatedObj.bikes.length; i++){ 
//     let newObj = updatedObj.bikes[i];
//     if(newObj.quantity < 3){ 
//       newObj["note"] = "restock needed"
//     }
//   }

//   return updatedObj

// }

// let result = updateBikeInventory(bikeInventory)
// console.log(result)


// Create a function named analyzeSolarSystem that takes one argument, a JSON string solarSystemData. The JSON string contains information about planets in our solar system. Each planet has the following properties:
// name (string)
// type (string: "rocky" or "gas")
// numberOfMoons (number)
// discoveredIn (number, year)
// surfaceTemperature (object with min and max in Celsius)
// hasRings (boolean)
// Your task:
// Parse the JSON string into an object.
// For each planet:
// Add a property classification based on these rules:
// If it's a rocky planet and surfaceTemperature.max < 50°C: Potentially Habitable
// If it's a rocky planet and surfaceTemperature.max >= 50°C: Extreme Environment
// If it's a gas planet and numberOfMoons > 10: Complex System
// If it's a gas planet and numberOfMoons <= 10: Simple Gas Giant
// Add a property ageOfDiscovery that calculates how many years ago the planet was discovered (from the year 2010)
// If the planet has rings and more than 5 moons, add a property specialFeature with value Ring System with Rich Moon Population
// Return the modified object as a JSON string.

// const solarSysData = {
//     "planets":[
//                {
//                 "name":"Mercury",
//                  "type":"rocky",
//                  "numberOfMoons":0,
//                  "discoveredIn":-3000,
//                  "surfaceTemperature":{
//                     "min":-180,"max":430
//                     },
//                  "hasRings":false
//                },
//                {
//                  "name": "Saturn",
//                  "type": "gas",
//                  "numberOfMoons": 82,
//                  "discoveredIn": -3000,
//                  "surfaceTemperature": {
//                                 "min": -178,
//                                 "max": -138
//                  },
//                  "hasRings": true
//                }
//             ]
//  }

//  function analyzeSolarSystem(solarSysData){ 
//     let copyData = JSON.parse(JSON.stringify(solarSysData));
    

//     for(let i = 0; i < copyData.planets.length; i++){ 
//         let newObj = copyData.planets[i];
//         if(newObj.type === "rocky" && newObj.surfaceTemperature.max < 50){
//             newObj["classification"] = "Potentially Habitable"
//         }
//         if(newObj.type === "rocky" && newObj.surfaceTemperature.max >= 50){ 
//             newObj["classification"] = "Extreme Environment"
//         }
//         if(newObj.type === "gas" && newObj.numberOfMoons > 10){ 
//             newObj["classification"] = "Complex System"
//         }
//         if(newObj.type === "gas" && newObj.numberOfMoons <= 10){ 
//             newObj["classification"] = "Simple Gas Giant"
//         }
//         if(newObj.hasRings && newObj.numberOfMoons > 5){ 
//             newObj["SpealizeFeature"] = "Ring System with Rich Moon Population"
//         }

//         newObj["ageOfDiscovery"] = 2010 - newObj.discoveredIn
//     }
//     return JSON.stringify(copyData)
//  }

//  let result = analyzeSolarSystem(solarSysData);
//  console.log(result)


// Create a function called addUniqueElements that takes two parameters: 
// an array and another array. 
// The function should convert the first array to a Set, 
// and add all elements from the second array to the Set, 
// but only if they don't already exist in the Set. 
// Finally convert the set to an array and return it.

// const array1 = [1,2,3,4];
// const array2 = [4,5,6];

// function addUniqueElements(array1, array2){ 
//     let newArr = new Set(array1);
//     array2.forEach((e) => { 
//         newArr.add(e)
//     })
//     let finalArr = Array.from(newArr);
//     return finalArr
// }

// addUniqueElements(array1, array2)



// Create a function called removeMultiples that takes two parameters: an array of numbers and a number n. The function should convert the array to a set, and remove all multiples of n from the Set (including n itself if it's in the Set). Finally convert the set to an array and return it.
// Multiples are the numbers you get when you multiply a given number (n) by all whole numbers (1, 2, 3, etc.).
// For example, if n = 3:
// The multiples of 3 are: 3, 6, 9, 12, 15, 18, 21, 24, and so on...
const arr = [1,2,3,4,5,6,7,8,9,10];
const n = 2;

function removeMultiples(arr, n){ 
    let newArr = new Set(arr);

    newArr.forEach((e) => { 
        if(e % n === 0){ 
            newArr.delete(e)
        }
    });
    let finalArr = Array.from(newArr);
    return finalArr;
}

let result = removeMultiples(arr, n)
console.log(result)