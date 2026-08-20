
export class Book { 
    constructor(title, author, pages){ 
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    getInfo() { 
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    }
}