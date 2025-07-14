
/*1. Adding Methods

Create a class Rectangle that takes width and height and has a method area() that returns the area.*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.height * this.width;
    }
}

const rect = new Rectangle(3, 4);
console.log(rect.area()); // 12


/*2. Book Program
Create a program to manage a list of books in a library.
Each book should have a title, author, and a method to display the book info.
You should also be able to count how many books are currently in the library.*/


class Books{

    static count = 0;


    constructor(title, author){
        this.title = title;
        this.author = author;
        Books.count++;
    }

    getInfo(){
        return `${this.title} by ${this.author}`;
    }

    static getTotal(){
        return Books.count;
    }

}

const book1 = new Books("Tracy Beaker", "Jacqueline Wilson");
const book2 = new Books("More Than This", "Patrick Ness");

console.log(Books.getTotal());
console.log(book2.getInfo());

