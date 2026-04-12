// Create a function called analyzeArray that takes an array as an argument. The function should use array destructuring to extract the first, second, and last elements of the array. It should return an object with the following properties:

// first: The first element of the array
// second: The second element of the array
// last: The last element of the array
// restLength: The number of remaining elements in the array
// If any of these elements don't exist, use default values of null

const array1 = [42];

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

console.log(analyzeArray(array1))