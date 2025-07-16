
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

//console.log(account.getBalance());

/*5. Inheritance
“Create a base class Animal with a makeSound() method. Then extend it with a Dog class that overrides makeSound() to return ‘Woof!’.”

What they’re testing:
Do you understand class inheritance and method overriding? */

class Animal{

    constructor(name){
        this.name = name;
    }

    makeSound(){
        return `${this.name} makes a sound.`
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        return `${this.name} says Woof!`
    }
}

const cow = new Animal("Cow");
const dog = new Dog("Noodle");

//console.log(cow.makeSound());
//console.log(dog.makeSound());

/*6. Notification System
You are creating a simple notification system for a messaging app.
Create a base class Notification with a method send() that logs a generic message.
Create two subclasses:

EmailNotification that overrides send() to log an email-specific message.
SMSNotification that overrides send() to log an SMS-specific message.
Demonstrate how the send() method works differently for each type of notification.*/

class Notification{
    constructor(name){
        this.name = name;
    }

    send(){
        return `Hi there ${this.name}!`
    }
}

class EmailNotification extends Notification{
    send(){
        return `${this.name} is sending an email`
    }
}

class SMSNotification extends Notification{
    send(){
        return `${this.name} has sent an SMS!`
    }
}

const person = new Notification("Joanne");
const emailGuy = new EmailNotification("Sam");
const SMSGuy = new SMSNotification("Mike");

//console.log(person.send());
//console.log(emailGuy.send());
//console.log(SMSGuy.send());


/* 7. Class Utility
“Create a Timer class that starts counting when initialized. Add a method to return how many seconds have passed since it was created.”

What they’re testing:
Can you use Date and time logic inside a class?

Can you encapsulate behavior that belongs together?*/

class Timer{

}















/* 8. Data Modeling
“You’re making a to-do list app. Create a Task class with properties like title, description, isComplete. Add methods to mark it complete and to return its status.”

What they’re testing:
Can you build a class that models real-world data and actions?

Can you write clean, reusable code? */







