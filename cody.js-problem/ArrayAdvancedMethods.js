// Create a function called formatNames that takes an array of names (strings) as an argument. 
// The function should use the map() method to transform each name so that it's in title case (first letter of each word capitalized, rest lowercase). 
// Return the new array of formatted names.

const names = ["john doe", "MARY JANE", "peter parker"];

function formatNames(arr){ 
    return arr.map(e => { 
        let words = e.toLowerCase().split(' ');
        for(let i = 0; i < words.length; i++){ 
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }

        return words.join(' ');
    })
}

// console.log(formatNames(names));

// Create a function called transformData that takes an array of product objects. Each product has a name (string) and price (number). Use the map() method to transform each product as follows:
// Make the name all uppercase
// Apply a 15% discount to the price (round to 2 decimal places)
// Add a new property called onSale set to true
// Return the new array of transformed products.

const products = [
    {"name":"chair","price":100},
    {"name":"desk","price":300},
    {"name":"monitor","price":250}
]

function transformData(products){ 
   products.map(product => { 

    let name = product.name.toUpperCase();
    let price = product.price - (product.price * 15 / 100);


    product.name = name;
    product.price = price;
    product.onSale = true;

})
return products
}

// console.log(transformData(products))


// Create a function called filterBooks that takes two parameters:
// An array of book objects, where each book has properties title (string), author (string), and rating (number from 1 to 5)
// A minimum rating (number)
// The function should use the filter() method to return a new array containing only the books with a rating greater than or equal to the minimum rating.

const books = [{ title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.8 }, { title: "Twilight", author: "Stephenie Meyer", rating: 3 }];
const minRating = 3;

function filterBooks(books, minRating){ 
    return books.filter((book) => { 
        if(book.rating >= minRating){ 
            return book
        }
    })
}

// console.log(filterBooks(books, minRating))



// Create a function named calculateGroceryTotal that takes an array of objects representing grocery items.
// Each object has two properties:
// name: string (name of the item)
// price: number (price of the item)
// The function should:
// Calculate the total cost of all items
// Apply a discount: - If total is above 100, apply 10% discount
// If total is above 50 but below or equal to 100, apply 5% discount
// No discount for totals of 50 or less.
// Return an object containing:
// originalTotal: the sum before discount
// discount: the amount saved
// finalTotal: the final amount after discount

const items = [{ name: "Organic Avocados", price: 15.99 }, { name: "Premium Salmon", price: 89.99 }]

function calculateGroceryTotal(items){ 
    let priceArr = [];
    let discount = 0;
    let finalTotal = 0
    // for(let i = 0; i < items.length; i++){ 
    //     let price = items[i].price;
    //     priceArr.push(price)
    // }

   let originalTotal = items.reduce((sum, item) => { 
        return sum + item.price
    }, 0);

    if(originalTotal > 100){
        discount = originalTotal * 0.10;
        finalTotal = originalTotal - discount
    }

    else if(originalTotal > 50 && originalTotal <= 100){ 
        discount = finalTotal * 0.5;
        finalTotal = originalTotal - discount
    }
    else{ 
        originalTotal = finalTotal
    }

      return {
        originalTotal: Math.round(originalTotal * 100) / 100,  // Round to 2 decimals
        discount: Math.round(discount * 100) / 100,
        finalTotal: Math.round(finalTotal * 100) / 100
    };



//     function calculateGroceryTotal(items) {
//     const originalTotal = items.reduce((sum, item) => sum + item.price, 0);
    
//     let discountPercentage = 0;
    
//     if (originalTotal > 100) {
//         discountPercentage = 0.10; // 10% discount
//     } else if (originalTotal > 50) {
//         discountPercentage = 0.05; // 5% discount
//     }
    
//     const discount = originalTotal * discountPercentage;
//     const finalTotal = originalTotal - discount;
    
//     return {
//         originalTotal: Math.round(originalTotal * 100) / 100,  // Round to 2 decimals
//         discount: Math.round(discount * 100) / 100,
//         finalTotal: Math.round(finalTotal * 100) / 100
//     };
// }
}

// console.log(calculateGroceryTotal(items))



// Create a function called processFruits that takes an array of fruit objects. Each fruit object has properties name (string) and quantity (number).
// The function should use chained array methods to:
// Filter out fruits with quantity of 0
// Transform each fruit name to uppercase
// Create a string that lists all fruits with their quantities like "APPLE: 5, BANANA: 3"

const fruits = [{name: "", quantity: 5}, {name: "banana", quantity: 3}, {name: "orange", quantity: 2}, {name: "banana", quantity: 5}]

function processFruits(fruits){ 
    let string;

    let result = fruits
    .filter((e) => { 
        if(e.quantity > 0){ 
            return e
        }
    })
    .map((e) => { 
        let name = e.name.toUpperCase();
        e[name] = name;
        
       return string = name + ": " + e.quantity;
    })

    return result.join(", ").toString();

}

// console.log(processFruits(fruits));


// Create a function named sortByLength that takes an array of strings and returns 
// a new array with the same strings sorted by their length in ascending order. 
// If two strings have the same length, they should be sorted alphabetically.

const arr = ["cat", "dog", "elephant", "bird"]

function sortByLength(arr){ 
    return arr.sort((a, b) => { 
        if(a.length === b.length){ 
            return a.localeCompare(b);
        }

        return a.length - b.length;

    })
}

console.log(sortByLength(arr))