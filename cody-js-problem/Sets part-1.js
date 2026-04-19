// Create a function called symmetricDifference that takes two arrays as parameters. 
// The function should convert the arrays to sets,
// and return a new Set containing elements that are in either of the two Sets, 
// but not in both. Use the has() method to check for element existence. 
// Finally convert the set to an array and return it.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

function symmetricDifference(arr1, arr2){ 
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    console.log(set1, set2);

    let finalSet = new Set([]);
    set1.forEach((e) => { 
        if(!set2.has(e)){ 
            finalSet.add(e)
        }
    });

    set2.forEach((e) => { 
        if(!set1.has(e)){ 
            finalSet.add(e)
        }
    })

    let result = Array.from(finalSet);
    return result;
}

// let ans = symmetricDifference(arr1, arr2);
// console.log(ans)


// Create a function named partyPlanner that takes an array of RSVPs (strings of names). Some people may have RSVP'd multiple times out of excitement. The function should return an object with:
// uniqueGuests: The number of unique guests attending
// hasDuplicates: A boolean indicating if anyone RSVP'd more than once
// isEmpty: A boolean indicating if no one RSVP'd
const rsvps = []

function partyPlanner(rsvps){ 
    let guestSet = new Set(rsvps);
    let hasDuplicates = false;
    let isEmpty = false;

    let uniqueGuests = guestSet.size;
    if(rsvps.length === uniqueGuests){ 
        hasDuplicates = false
    }
    else{ 
        hasDuplicates = true
    }
    if(rsvps.length === 0){ 
        isEmpty = true
    }
    else{ 
        isEmpty = false
    }

    let result = { 
        uniqueGuests,
        hasDuplicates,
        isEmpty
    }

    return result
}

// let ans = partyPlanner(rsvps)
// console.log(ans)

// Create a function called setOperations that takes an array as a parameter. The function should convert the array to a set and:

// Create a copy of the input Set
// Add the number 10 to the copied Set
// Clear the original Set
// Return an object with two properties: copiedSet (the modified copy) and originalSet (the cleared original Set)

const inputArr = [1, 2, 3, 4, 5];

function setOperations(inputArr){ 
    let OriginalSet = new Set(inputArr);
    let newSet = new Set(set);

    newSet.add(10);

    OriginalSet.clear();

    return{ 
        OriginalSet,
        newSet
    }
}

// let ans = setOperations(inputArr);
// console.log(ans)

// Create a Set from the input array to get unique student names
// Remove any student whose name starts with 'Z' (case insensitive)
// Add 'John Doe' to the Set if not already present
// Return an object with the following properties:
// uniqueCount: The number of unique students
// hasJohnDoe: A boolean indicating whether 'John Doe' is in the Set
// studentsArray: An array of the final set of student names

const students = [];

function processStudentGroups(students){
    let newSet = new Set(students);
    let hasJohnDoe = false;

    newSet.forEach((e) => { 
        if(e.startsWith("Z") || e.startsWith("z")){ 
            newSet.delete(e)
        }

    });
    newSet.add("John Doe")
    let uniqueCount = newSet.size;

    if(newSet.has("John Doe")){ 
        hasJohnDoe = true;
    }

    let studentsArray = Array.from(newSet)

    return { 
        uniqueCount,
        hasJohnDoe,
        studentsArray
    }
}

// let ans = processStudentGroups(students);
// console.log(ans)


