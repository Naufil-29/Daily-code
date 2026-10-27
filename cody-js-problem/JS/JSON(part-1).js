// let book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   pages: 180,
//   isRead: false,
//   genre: "Classic"
// }

// function toggleBookStatus(book){ 

//     if(book.hasOwnProperty("isRead")){ 
//         if(book.isRead === true){ 
//             book.isRead = false
//         }
//         else if(book.isRead === false){ 
//             book.isRead = true
//         }
//     }

//     if(!book.hasOwnProperty("isRead")){ 
//         book.isRead = true
//     }

//     return(book)
// }

// toggleBookStatus(book)

// let data = { 
//     "username": "johnDoe",
//     "email": "johnDoe@example.com"
// }

// let reqKeys = ["username", "email"]
// let newArr = []

// function findMissingKeys(data, reqKeys) { 
//     for(let i = 0; i < reqKeys.length; i++){ 
//         if(!data.hasOwnProperty(reqKeys[i])){ 
//             newArr.push(reqKeys[i])
//         }
//     }
//     console.log(newArr)
// }

// findMissingKeys(data, reqKeys)

// object static methods
// const cart = { 
//     "banana": 5,
//     "apple": 3,
//     "orange": 2,
//     "mango": 1,
//     "pearl": 4
// }

// function analyzeShopingCart (cart) { 
//    let objKeys = Object.keys(cart)
//    let objValues = Object.values(cart)

//    let totalItems = objKeys.length;
//    let totalQuantity = 0;

//    for(let i = 0; i < objValues.length; i++){ 
//         totalQuantity += objValues[i]
//    }

//    console.log(totalQuantity)
// }

// analyzeShopingCart (cart)

const inventory = {
    "banana": 8,
    "orange": 12,
    "pear": 15,
    "apple": 15
}

function findMostFrequentItem (inventory) { 
     let arrInventory = Object.entries(inventory)
     let biggestVal = '';
     let biggestNum = 0;

    for(let i = 0; i < arrInventory.length; i++){ 
        if(biggestNum < arrInventory[i][1]){ 
            biggestNum = arrInventory[i][1]
            biggestVal = arrInventory[i][0]
        }
    } 
    console.log(biggestVal, biggestNum)
}

findMostFrequentItem (inventory)