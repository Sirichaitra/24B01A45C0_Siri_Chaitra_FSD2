"use strict";
class LibraryBook {
    bookTitle;
    bookPrice;
    authorName;
    availableCopies;
    constructor(bookTitle, bookPrice, authorName, availableCopies) {
        this.bookTitle = bookTitle;
        this.bookPrice = bookPrice;
        this.authorName = authorName;
        this.availableCopies = availableCopies;
    }
    showBookDetails() {
        console.log("Book Title: " + this.bookTitle);
        console.log("Author Name: " + this.authorName);
        console.log("Available Copies: " + this.availableCopies);
        console.log("Book Price: " + this.bookPrice);
    }
    borrowBook() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            console.log("Book borrowed successfully.");
        }
        else {
            console.log("Book is not available.");
        }
    }
    returnBook() {
        this.availableCopies++;
        console.log("Book returned successfully.");
    }
}
class DigitalBook extends LibraryBook {
    fileFormat;
    constructor(bookTitle, bookPrice, authorName, availableCopies, fileFormat) {
        super(bookTitle, bookPrice, authorName, availableCopies);
        this.fileFormat = fileFormat;
    }
    displayDigitalBook() {
        console.log("Book Title: " + this.bookTitle);
        console.log("Author Name: " + this.authorName); // protected
        console.log("File Format: " + this.fileFormat);
        console.log("Available Copies: " + this.availableCopies);
    }
}
const book1 = new LibraryBook("TypeScript Basics", 750, "John Smith", 5);
book1.showBookDetails();
book1.borrowBook();
book1.returnBook();
console.log("-----------------------");
const ebook = new DigitalBook("Web Development", 950, "Alice Brown", 10, "PDF");
ebook.displayDigitalBook();
console.log("-----------------------");
// Public member can be accessed
console.log("Book Title:", book1.bookTitle);
// Private member cannot be accessed
// console.log(book1.bookPrice);
// Protected member cannot be accessed
// console.log(book1.authorName);
