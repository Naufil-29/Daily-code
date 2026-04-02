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


const order = {
  "Sushi Platter": {"price": 45.99, "quantity": 2, "isSpecialOffer": true}, 
  "Green Tea": {"price": 3.50, "quantity": 4, "isSpecialOffer": false}, 
  "Miso Soup": {"price": 2.99, "quantity": 3, "isSpecialOffer": true}
}

function calculateRestaurantBill(order){ 
  let totalBeforeDiscount = 0;
  let totalDiscount = 0;

  for(const item of Object.values(order)){ 
    let itemTotal = item.price * item.quantity;
    totalBeforeDiscount += itemTotal;

    if(item.isSpecialOffer){ 
      let discount = itemTotal * 0.2
      totalDiscount += discount
    }
  }

  let finalTotal = totalBeforeDiscount - totalDiscount
  console.log(totalBeforeDiscount, totalDiscount, finalTotal)
}

calculateRestaurantBill(order)