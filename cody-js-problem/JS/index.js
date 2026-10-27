// Write a program that receives an array of numbers as input (given), and prints an array of the numbers 
// that are either below 50 or are divisible by 5. Use the forEach method.


// let numbers = [1, 5, 10, 31, 52];

// let arr = [];

// numbers.forEach((number) =>{ 
//     if(number < 50 && number % 5 === 0){
//          arr.push(number)
//     }
// })
// console.log(arr)



//Write a function named countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) 
// in the string. Use a for...of loop to iterate over the characters of the string.

//For example:

//countVowels("hello") should return 2
//countVowels("javascript") should return 3

// let str = "Hello";
// let vowels = "aeiouAEIOU";
// let found = "";


// function countVowels(str){ 
//     for(const char of str){ 
//         if(vowels.includes(char)){ 
//            found += char;
//         }
//     }

//     console.log(found ) 
//     console.log(found.length)
// };

// countVowels(str);


// Write a function named countDigits that takes a string as an argument and returns the number of digits (0-9) in the string.
//  Use a for...of loop to iterate over the characters of the string.

// For example:

// countDigits("hello123world") should return 3
// countDigits("2020year") should return 4


// let str = "hello12world3";

// function countDigits(str){ 
//     let numbers = "0123456789"
//     let foundnums = ""


//     for(const char of str){ 
//         if(numbers.includes(char)){ 
//             foundnums += char;
//         }
//     };
//     console.log(foundnums.length)
// };

// countDigits(str);


// Create a program that receives a string as input (given), and it prints how many times
//  the character p is in the string.

// Some chars might be upper cased, use char.toLowerCase() to convert it to lower cased.

// let text = "apple Pie";

// function pCount (str){ 
//     let pTimes = "";

//     let smallCase = text.toLowerCase()
//     for(const char of smallCase){ 
//         if(char === "p"){ 
//             pTimes += char;
//         }
//     };

//     console.log(pTimes.length)
// };

// pCount(text)



// Create a program that receives an array as input (given) and prints the following sliced arrays:

// For odd-length arrays: take the middle item and one item on each side (3 items total)
// For even-length arrays: take the two middle items
// For this challenge, use Math.floor() because array slicing only works with whole numbers.

// Example, Math.floor(5.5) will return 5 as it find the floor of a float number


// let arr = [1, 2, 3, 4, 5, 6, 7];

// function main(arr){
// if(arr.length % 2 === 0){ 
//      let midArr = arr.slice(Math.floor(arr.length/2-1), Math.floor(arr.length/2+1));
//      console.log(midArr);
// }
// else{ 
//      let midArr = arr.slice(Math.floor(arr.length/2-1), Math.floor(arr.length/2+2));
//      console.log(midArr);
// }
// };

// main(arr)



// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];

// let newArr = numbers.slice(2,7);
// console.log(newArr)


// You are given an array numbers = [1, 2, 3, 4, 5]. Perform the following steps and print the results directly:

// Use concat() to add [6, 7, 8] to the end of the array and print the result.
// Use join() to convert the result of concat() into a string separated by commas and print it.
// Use slice() to extract the first three elements from the original numbers array and print them.
// Use splice() to replace the second element of numbers with 99 and print the modified numbers array.

// let  numbers = [1, 2, 3, 4, 5]
// let newArr = [6, 7, 8];
// let combined = numbers.concat(newArr);
// console.log(combined);

// let joinedArr = combined.join(", ");
// console.log(joinedArr);

// let slicedArr = numbers.slice(0, 3);
// console.log(slicedArr);

// let splicedArr = numbers.splice(1, 1, 99);
// console.log(splicedArr)
// console.log(numbers);


// Create a function named formatSentence that:

// Takes one argument: sentence (a string).
// Splits the sentence into words using spaces (" ") as the delimiter.
// Joins the words back together into a single string, separated by hyphens ("-").
// Returns the formatted string.

// let string = "Coding is super fun"

// function formatSentence(str){ 
//     let newStr = str.split(" ").join("-")
//     console.log(newStr)
// };

// formatSentence(string)


// Create a function named transformArray that:

// Takes an array of numbers as its only argument.
// Removes all numbers less than 10.
// Multiplies the remaining numbers by 2.


// let Numbers = [5, 12, 8, 20, 7, 15];

// function transformArray(Numbers){ 
//      let filteredArr = Numbers.filter(num => num >= 10);
//      console.log(filteredArr)
//      let transformed = filteredArr.map(num => num * 2);
//      console.log(transformed)
// };

// transformArray(Numbers);


//Create a program that receives two arrays of numbers as input (given) and prints a new array of all elements 
// that are in the first array but NOT in the second array.


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 6];

// function checkArr(arr1, arr2){ 
//      let result = [];
//      for(let i = 0; i < arr1.length; i++){ 
//           if(!arr2.includes(arr1[i])){ 
//                result.push(arr1[i])
//           };
//      };
//      console.log(result);
// };

// checkArr(arr1, arr2)
// var List = [];

// function addItem(str, arr){ 
//   let pushItem = arr.push(str);
//   console.log(`${str} added to the grocery list.`)  
// }

// addItem("Milk", List);
// addItem("Bread", List);
// addItem("Eggs", List);

// function removeItem(str2){ 
//     if(List.indexOf(str2) === -1){ 
//         console.log(`${str2} is not in the grocery list.`)
//     }else{
//     let removedItem = List.splice(List.indexOf(str2), 1);
//       console.log(`${removedItem} removed from the grocery list.`) 
//     };

// };

// removeItem("Bread");
// removeItem("Cheese");



// function viewList(){ 
//      if(List.length === 0){ 
//           console.log(`Grocery list is empty.`)
//      }
//      else{ 
//           console.log(List)
//           List.forEach((item, index) => console.log(`${index + 1}. ${item}`))
//      };
// };

// viewList();



// let n = 5;

// for(let i = 1; i <= n; i++){ 
//     let spaces = " ".repeat(n - i)
//     let stars = "*".repeat(2 * i - 1)

//     console.log(spaces + stars)
// }

// let numbers = [1, 2, 3, 4, 5]

// function doubleOdds(numbers) {
//     // Write code here
//     let doubledArr = [];
//     for(let i = 0; i < numbers.length; i++){
        
//         if(numbers[i] % 2 !== 0){ 
//             let doubledOdd = numbers[i] * 2
//             doubledArr.push(doubledOdd)
//         }else{ 
//             doubledArr.push(numbers[i])
//         }
//     }
//     console.log(doubledArr)
// }

// doubleOdds(numbers)




// Write a function named analyzeBudget that:

// Takes three arguments: a list of prices, a list of item names, and a budget per item.
// Prints:
// A list of items you can afford.
// The total cost of the affordable items.
// The number of items out of budget.
// Example:
// For prices = [10, 20, 5, 15], items = ["Notebook", "Pen", "Eraser", "Bag"], and budget = 10, the output should be:

// Affordable items: "Notebook", "Eraser"
// Total budget needed: 15
// Items out of budget: 2


// let prices = [10, 20, 5, 15];
// let items = ["Notebook", "Pen", "Eraser", "Bag"];
// let budget = 10;


// function analyzeBudget(prices, items, budget){ 
//     let affordableItems = [];
//     let totalBudget = 0;
//     let unaffordableItems = 0;

//     for(let i=0; i<=items.length; i++){ 
//         if(prices[i] <= budget){ 
//             affordableItems.push(items[i]);
//             totalBudget += prices[i];
//         }
//         else{ 
//             unaffordableItems++
//         }
//     }
//         console.log(`Affordable items: ${affordableItems}`);
//     console.log(`Total budget needed: ${totalBudget}`);
//     console.log(`Items out of budget: ${unaffordableItems}`);

// }

// analyzeBudget(prices, items, budget)



















