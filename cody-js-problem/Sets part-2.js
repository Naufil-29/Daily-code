// Create a function called setUnion that takes two arrays as parameters. 
// The function should convert that arrays to sets and create a new Set that is the union of the two input Sets. 
// Finally convert the set to an array and return it.
// Do not use the spread operator in your solution.

// const arr1 = [1,2,3];
// const arr2 = [3,4,5];
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

// const array1 = ["apple", "banana", "orange"];
// const array2 = ["banana", "kiwi", "orange"];

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

// let ans = efficientSymmetricDifference(arr1, arr2)
// console.log(ans)


// Create a function called analyzeSetRelations that takes two arrays as parameters: arr1 and arr2. The function should convert the arrays to sets and return an object with the following properties:
// isSubset: a boolean indicating whether set1 is a subset of set2
// isSuperset: a boolean indicating whether set1 is a superset of set2
// isEqual: a boolean indicating whether set1 and set2 have exactly the same elements

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];


function analyzeSetRelations(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);


   
    let isSubset = false;  
    let isSuperset = false; 
    let isEqual = false; 
   
   isSubset = [...set1].every(e => set2.has(e));
   isSuperset = [...set2].every(e => set1.has(e));
   isEqual = isSubset && isSuperset

    return {
        isSubset: isSubset,
        isSuperset: isSuperset,
        isEqual: isEqual
    };
}

// let ans = analyzeSetRelations(arr1, arr2);
// console.log(ans)


// Create a function named analyzeFriendGroups that takes two arrays of names (representing two different friend groups) as parameters. The function should convert the arrays to sets and returns an object containing the following information (in this exact order):
// mutualFriends: The number of people who are in both friend groups
// exclusiveToFirst: The number of people who are only in the first group
// exclusiveToSecond: The number of people who are only in the second group
// potentialConnections: The number of unique connections that could be made between exclusive members of each group 
// isSubset: Boolean indicating if one group is entirely contained within the other

let group1 = ["John", "Mike", "Sarah", "Lisa"];
let group2 = ["Mike", "Sarah"];

function alalyzeFriendGroups(group1, group2){ 
    let set1 = new Set(group1);
    let set2 = new Set(group2);
    let mutualFriends = 0;
    let exclusiveToFirst = 0;
    let exclusiveToSecond = 0;
    let potentialConnection = 0;
    set1.forEach((e) => { 
        if(set2.has(e)){ 
            mutualFriends += 1
        }
        if(!set2.has(e)){ 
            exclusiveToFirst += 1
        }
    });

    set2.forEach((e) => { 
        if(!set1.has(e)){ 
            exclusiveToSecond += 1
        }
    });

    potentialConnection = exclusiveToFirst + exclusiveToSecond;

    let isSubset = [...set1].every(e => set2.has(e))

    if(isSubset = false){ 
        isSubset = [...set2].every(e => set1.has(e))
    }

     return {
        "mutualFirends": mutualFriends, 
        "exclusiveToFirst": exclusiveToFirst, 
        "exclusiveToSecond": exclusiveToSecond, 
        "potentialConnection": potentialConnection, 
        "isSubset":isSubset
    }
}

// let ans = alalyzeFriendGroups(group1, group2);
// console.log(ans)




// Now follow these steps:
// Create a function called manageLibrary that takes two parameters:
// actions (array of strings)
// data (array of objects)
// The function should process each action in the actions array in sequence, using the corresponding data object from the data array at the same index. For example, the action at actions[i] uses the data at data[i].
// Create a loop that goes through each action in the actions array, then inside the loop:
// Create an empty result array that will hold all of the results
// Create a switch statement that will handle different cases
// Add a case printBooks inside the switch statement that will add the current books inside the libraryData to the results array
// Add a case printReaders inside the switch statement that will add the current readers inside the libraryData to the results array
// Add a default case that adds an “Invalid action!” to the results array
// Initial library data


// Add the case "addBook". This case should:
// Create a new book object using the currentData parameter which holds the following properties:
// title (string)
// author (string)
// year (string)
// genre (string)
// Generate an id (use libraryData.books.length + 1)
// Set default values for: isRead, rating, borrowed, borrowedBy, borrowDate (like in the initial data)
// Add the new book to libraryData.books array
// Add the string Book added successfully! to the results array


// Create a new case searchByTitle in your switch statement. This action should search for books by their title.
// For the searchByTitle case:
// The currentData parameter is a string to search for
// Create an empty array searchResults to store the search results
// Loop through all books in the library
// For each book, check if its title includes the search string
// The search should be case-insensitive (convert both strings to lowercase before comparing)
// If a match is found, add the book to the searchResults array
// Add the searchResults array to the main results array


let libraryData = {
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Fiction",
            isRead: false,
            rating: 0,
            borrowed: false,
            borrowedBy: "",
            borrowDate: ""
        }
    ],
    readers: [
        {
            name: "John Smith",
            favoriteGenre: "Fiction",
        }
    ]
}
// , {title: "The Ring of Power", author: "Anonymous", year: 2010, genre: "History"}, {title: "Ring World", author: "Larry Niven", year: 1970, genre: "Science Fiction"}, "ring"]

const actions = ["addBook", "addBook", "addBook", "markAsRead"]
const data = [
    {
        title: "Harry Potter and the Sorcerer's Stone", 
        author: "J.K. Rowling", 
        year: 1997, 
        genre: "Fantasy"
    }, 
    {
        title: "Harry Potter and the Chamber of Secrets", 
        author: "J.K. Rowling", 
        year: 1998, 
        genre: "Fiction"
    }, 
    { 
        bookId: 2,
        rating: 1
    },
    ]


function manageLibrary(actions, data) {
    let results = [];
    let dataIndex = 0;
    let searchQuery = "";
    let filteredQuery = "";
    let searchResults = [];
    let filteredResults = [];
    let ratingObj ={}

    for (let i = 0; i < actions.length; i++) {
        const currentAction = actions[i];
        const currentData = data[i];

        if(typeof currentData === "string"){ 
            searchQuery = currentData;
            filteredQuery = currentData;
        }

        if(currentData && typeof currentData === "object" && Object.hasOwn(currentData, "rating")){ 
            ratingObj = currentData;
            console.log(ratingObj)
        }
        

         switch (currentAction) {
            case 'printBooks':
                results.push(libraryData.books);
                break
            case 'printReaders':
                results.push(libraryData.readers);
                break
            case 'addBook':
                let currentData = data[dataIndex++]
                if(!currentData){
                    break;
                }
                let newObj = { 
                    id: libraryData.books.length + 1,
                    ...currentData,
                    isRead: false,
                    rating: 0,
                    borrowed: false,
                    borrowedBy: "",
                    borrowDate: ""
                }
                
                results.push("Book added successfully!")
                libraryData.books.push(newObj)
                break
            case 'searchByTitle':
                libraryData.books.forEach((b) => { 
                    let title = b.title.toLowerCase()
                    console.log('title: ', title)
                    if(title.includes(searchQuery.toLowerCase())){ 
                        searchResults.push(b)
                    }
                });
                results.push(searchResults)
                break
            case 'filterByGenre':
                libraryData.books.forEach((b) => { 
                    let genre = b.genre;
                    if(genre === filteredQuery){ 
                        filteredResults.push(b)
                    }
                });
                results.push(filteredResults)
                break
            case "markAsRead":
                // Mark a book as read and add rating
                let flag = false;
                if (!(ratingObj.rating >= 1 && ratingObj.rating <= 5)) {
                    results.push("Invalid rating! Please rate between 1 and 5");
                } else {
                    for (let i = 0; i < libraryData.books.length; i++) {
                        if(libraryData.books[i].id === ratingObj.bookId) {
                            libraryData.books[i].isRead = true;
                            libraryData.books[i].rating = ratingObj.rating;
                            results.push("Book marked as read!");
                            flag = true;
                        }
                    }
                    if (flag === false) {
                        results.push("Book not found!");
                    }
                }
                break;
            // case 'markAsRead':
            //     let found = false;
            //     libraryData.books.forEach((b) => { 
            //         let id = b.id;
            //         if(id === ratingObj.bookId && ratingObj.rating > 0 && ratingObj.rating <= 5){ 
            //             found = true
            //             b.isRead = true;
            //             b.rating = ratingObj.rating
                        
            //         }
            //         else if(id === ratingObj.bookId && ratingObj.rating < 0 || ratingObj.rating > 5){
            //             found = true; 
            //             results.push("Invalid rating! Please rate between 1 and 5")
            //         }
            //     })
            //     if(!found){ 
            //         results.push("Book not found!")
            //     }
            //     break
            default:
                results.push("Invalid action!");
                break
        }
    }
    return results;
}

let ans = manageLibrary(actions, data) ;
console.log(ans)





