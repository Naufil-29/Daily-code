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

// // TODO: Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
// const newCar = new Car("Honda", 2018);
// // TODO: Call the getDescription method on your car object and print the result to the console
// console.log(newCar.getDescription());


// Recap Challenge: Build a Smart Thermostat

// Practice everything you learned in this chapter by creating a smart thermostat object.

// Your task:

// Create a constructor function called Thermostat that takes a room parameter
// Inside the constructor, set these properties using this:
// room (from the parameter)
// temperature (set to 22)
// isOn (set to true)
// Add these methods inside the constructor using this:
// increaseTemp() - increases temperature by 1 degree
// decreaseTemp() - decreases temperature by 1 degree
// getStatus() - returns: "[room] thermostat: [temperature]°C"




function Thermostat(room){ 
    this.room = room;
    this.temperature = 22;
    this.isOn = true;

    this.increaseTemp = function() { 
       return this.temperature += 1;
    };

    this.decreaseTemp = function() { 
       return this.temperature -= 1;
    };
    this.getStatus = function() { 
        return `${this.room} thermostat: ${this.temperature}°C`;
    }
};


// Test your code - don't modify this part
const livingRoom = new Thermostat("Living Room");
livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.getStatus()); // Should print: "Living Room thermostat: 24°C"

const bedroom = new Thermostat("Bedroom");
bedroom.decreaseTemp();
bedroom.decreaseTemp();
console.log(bedroom.getStatus()); // Should print: "Bedroom thermostat: 20°C"

