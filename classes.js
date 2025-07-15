
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
//console.log(rect.area()); // 12


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

//console.log(Books.getTotal());
//console.log(book2.getInfo());

/*3. User Program 
You are building a program to manage a collection of users.
Each user has a name and an email.
Every time a new user is created, increase the total user count.
Create a method to display the user's info, and a static method to return the total number of users.*/

class users{
    static count = 0;
    constructor(name, email){
        this.name = name;
        this.email = email;
        users.count++;
    }

    getUserInfo(){
        return `${this.name} has ${this.email} email`
    }

    static getTotal(){
        return users.count;
    }
}

const user1 = new users("Alice", "alice@example.com");
const user2 = new users("Bob", "bob@example.com");

//console.log(user1.getUserInfo());
//console.log(users.getTotal());

/*4. Encapsulation
“Create a class BankAccount with a private balance. Add methods to deposit, withdraw, and getBalance, but prevent direct access to the balance.”*/

class BankAccount{
    #balance;

    constructor(initialAmount = 0){
        this.#balance = initialAmount;
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount(100);

account.deposit(50);
account.withdraw(30);

console.log(account.getBalance());

