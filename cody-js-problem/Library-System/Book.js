// Create Book Class with Composition

// Your task:

// In the file called Book.js import the Author class at the top
// Create and export a Book class with:
// Private fields: #title, #author, #isCheckedOut
// Constructor that takes title and author
// Two getters: title and authorInfo that returns the author's name
// In main.js, add the import for Book class
// How Composition is Applied Here:

// Composition means "has-a" relationship. In our Book class:

// Book HAS-AN Author (not "is-an" Author)
// The Book contains an Author instance as one of its components
// The Author exists separately and can be used by multiple Books
// This is composition: building complex objects (Book) from simpler ones (Author)


// Improve the Book class constructor by adding validation. Currently, the Book accepts any value for the author parameter, but it should only accept an Author instance.

// Your task:

// In the Book constructor, add an if-else check
// If the author is valid (an instance of Author class) using author instanceof Author, set this.#author = author
// Otherwise (author is invalid): Log exactly “Invalid author: must be Author instance”. Set this.#author = null
// In this way, the book should still be created even with an invalid author.




import { Author } from "./Author.js"

export class Book{ 
    #title = "";
    #author = "";
    #isCheckedOut = false;

    constructor(title, author){ 
        this.#title = title;
        if(author instanceof Author){ 
            this.#author = author;
        }
        else{ 
            console.log("Invalid author: must be Author instance");
            this.#author = null;
        }

    }
        get title() { 
            return `${this.#title}`;
        }

        get authorInfo() { 
            return `${this.#author.name}`;
        }
}