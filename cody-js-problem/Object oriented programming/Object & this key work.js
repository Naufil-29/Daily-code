//     Create a constructor function named Book that takes three arguments:
// title (String)
// author (String)
// pages (Number)
// The function should set these as properties on the object created. 

//     2. Add a method called getSummary that returns a string with some information about the book: this.title + " was written by " + this.author + " and has " + this.pages + " pages";

// TODO: Create a constructor function named Book that takes three arguments (title, author, page
function Book(title, author, pages) { 
// TODO: Set these as properties on the object created
    this.title = title;
    this.author = author;
    this.pages = pages;

// TODO: Add a method called getSummary that returns a string with some information about the book.
// For example: Harry Potter was written by Rowling and has 500 pages
    this.getSummary = function() { 
        return `${title} was written by ${author} and has ${pages} pages`;
    };
}

// Don't modify the code below
const inputTitle = inp[0];          // First line: book title
const inputAuthor = inp[1];         // Second line: author  
const inputPages = parseInt(inp[2]);// Third line: number of pages

const book = new Book(inputTitle, inputAuthor, inputPages);
console.log(book.getSummary());


// Create a Car Object and Print Its Description

// You're given a constructor function that creates car objects. Your task is to:

// Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
// Call the getDescription method on your car object
// Print the result to the console

function Car(name, year) {
    this.name = name;
    this.year = year;
    
    this.getDescription = function() {
        return "This is a " + this.name + " from " + this.year;
    };
}

// TODO: Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
const newCar = new Car("Honda", 2018);
// TODO: Call the getDescription method on your car object and print the result to the console
console.log(newCar.getDescription());