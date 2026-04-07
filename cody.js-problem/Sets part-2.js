// Create a function called setUnion that takes two arrays as parameters. 
// The function should convert that arrays to sets and create a new Set that is the union of the two input Sets. 
// Finally convert the set to an array and return it.
// Do not use the spread operator in your solution.

const arr1 = [1,2,3];
const arr2 = [3,4,5];
function setUnion(arr1, arr2){ 
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let unionSet = new Set(set1);

    set2.forEach((e) => { 
        if(!unionSet.has(e)){ 
            unionSet.add(e)
        }
    })
    return Array.from(unionSet)
};

// let ans = setUnion(arr1, arr2);
// console.log(ans)


// Create a function called setIntersection that takes arrays as parameters. 
// The function should convert that arrays to Sets. Create a Set that is the intersection of the two input Sets, 
// convert to an array and return the array. Do not use the spread operator in your solution.

const array1 = ["apple", "banana", "orange"];
const array2 = ["banana", "kiwi", "orange"];

function setIntersection(array1, array2){ 
    let set1 = new Set(array1)
    let set2 = new Set(array2)
    let intersectionSet = new Set();

    for(let element of set1){ 
        if(set2.has(element)){ 
            intersectionSet.add(element)
        }
    }

    return Array.from(intersectionSet)
}

// let ans = setIntersection(array1, array2);
// console.log(ans)


// Create a function called setDifference that takes two arrays as parameters: arr1 and arr2. 
// The function should convert the arrays to sets. 
// Create a new Set that contains elements that are in set1 but not in set2, convert it an array and return it

const arrA = [1, 2, 3, 4]
const arrB = [3, 4, 5, 6]

function setDifference(arrA, arrB){
    let set1 = new Set(arrA);
    let set2 = new Set(arrB);
    const differenceSet = new Set([...set1].filter(x => !set2.has(x)));

    return Array.from(differenceSet)
}

// let ans = setDifference(arrA, arrB)
// console.log(ans)


// Create a function called efficientSymmetricDifference that takes two arrays as parameters: arr1 and arr2. 
// The function should convert the arrays to sets. 
// Create a new Set that is the symmetric difference of the two input Sets, 
// convert it to array and return the array

function efficientSymmetricDifference(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const symDiff = new Set([ 
        ...set1.difference(set2),
        ...set2.difference(set1)
    ]);


    return Array.from(symDiff);

}