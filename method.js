/* 
Challenge 1: Email Extractor
You are given a list of users:

Task: Write a function that returns just an array of their email addresses.

Expected output:


["alice@example.com", "bob@example.com", "charlie@example.com"] */


const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" }
];

function emailAddress(users){
    return users.map(user => user.email )
}

console.log(emailAddress(users));


/*Challenge 2: Shopping Cart Total
You are given this cart:

Task: Write a function that returns the total price of all items in the cart.

Expected output:


20.24 */

const cart = [
  { item: "Book", price: 12.99 },
  { item: "Pen", price: 1.5 },
  { item: "Notebook", price: 5.75 }
];



function totalSum(cart){
    return cart.reduce((total, currentItem) => total + currentItem.price, 0)
}

console.log(totalSum(cart));



/*Challenge 3: Library Filter
Given this library:


const library = [
  { title: "1984", available: true },
  { title: "The Hobbit", available: false },
  { title: "Dune", available: true }
];
Task: Write a function that returns a list of titles of the available books.

Expected output:

["1984", "Dune"]*/



/*Challenge 4: Find User by Name
Given:


const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
Task: Write a function that takes a name and returns the user object with that name.

Example:


findUser("Bob") 
// should return: { id: 2, name: "Bob" } */