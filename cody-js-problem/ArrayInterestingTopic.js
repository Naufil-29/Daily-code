// Create a function called analyzeArray that takes an array as an argument. The function should use array destructuring to extract the first, second, and last elements of the array. It should return an object with the following properties:

// first: The first element of the array
// second: The second element of the array
// last: The last element of the array
// restLength: The number of remaining elements in the array
// If any of these elements don't exist, use default values of null

// const array1 = [42];

function analyzeArray(array){ 
    let result = {}

    if(array.length <= 0){ 
        result = { 
             first : null,
            second : null,
            last : null,
            restLength : null
        }
    }
    else if(array.length <= 1){ 
        result = { 
             first : array[0],
            second : null,
            last : null,
            restLength : null
        }
    }
    else{ 
        const [first, second, ...rest] = [...array];
        let last = array[array.length - 1];
        let restLength = rest.length
        
        result = { 
            first,
            second,
            last,
            restLength
        }
    }


    return result
}

// console.log(analyzeArray(array1));



// Create a function called mergeArr that takes two arrays of numbers as arguments. The function should:
// Merge the two arrays using the spread operator
// Remove any duplicate numbers
// Return the resulting array

// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];

function mergeArr(arr1, arr2){ 
    const combined = [...arr1, ...arr2];

    let finalSet = new Set(combined);
    return Array.from(finalSet)
}

// mergeArr(array1, array2);


// Create a function called analyzeSparseArray that takes a sparse array as an argument. The function should return an object with the following properties:
// length: The total length of the array
// elementCount: The number of non-empty elements in the array
// largestGap: The size of the largest gap (consecutive empty slots) in the array

const sparseArray = [1, , , 4, , , , , 5];

function analyzeSparseArray(arr){ 
    let length = arr.length;
    let elementCount = 0;
    let currentGap = 0;
    let largestGap = 0;

    for(let i = 0; i < arr.length; i++){ 
        if((i in arr)){ 
            elementCount++
        }
    }

    for(let i = 0; i < arr.length; i++){ 
        if(!(i in arr)){ 
           currentGap++
           console.log(currentGap)
        }
        else{ 
            if(currentGap > largestGap){ 
                largestGap = currentGap;
            }
            currentGap = 0;
        }
    }

    if(currentGap > largestGap){ 
        largestGap = currentGap;

    }

    return {
        length: length, 
        elementCount: elementCount, 
        largestGap: largestGap
    }
}

// console.log(analyzeSparseArray(sparseArray))



// Create a function called arrayWorkshop that takes an array of numbers as an argument. The function should perform the following operations:
// Remove all duplicate numbers from the array
// If the array has fewer than 3 elements after removing duplicates, add the number 0 to the array until it has 3 elements
// Replace the first and last elements with their sum
// Return the modified 

const array1 = [1, 2, 3, 4, 5];

function arrayWorkshop(arr){ 
      if(arr.length <= 2){ 
        while(arr.length < 3){ 
            arr.push(0)
        }
    }

    let first = arr[0];
    let last = arr[arr.length - 1];
    let sum = first;
    if(first !== last){ 
      sum = first + last
    }
    

    let seen = new Set();
    let middle = [];

    for(let i = 1; i < arr.length - 1; i++){ 
      const val = arr[i];

      if (val === first || val === last) continue;

        if(!seen.has(arr[i])){ 
            seen.add(arr[i]);
            middle.push(arr[i]);
        }
    }

    let result = [sum, ...seen, sum];


        while(result.length < 3){ 
           result.splice(1, 0, 0);
        }

    return result
}
console.log(arrayWorkshop(array1))


