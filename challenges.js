/*Challenge 1: Library Book Manager
Description:

You're building a tiny system for a library to track borrowed books.


const library = [
  { title: "1984", author: "Orwell", available: true },
  { title: "The Hobbit", author: "Tolkien", available: false },
  { title: "Dune", author: "Herbert", available: true },
];

Tasks:
Write a function borrowBook(title) that sets available to false.

Write a function returnBook(title) that sets available to true.

Write a function getAvailableBooks() that returns only available books.

Add an optional search: searchBooks(term) that returns books where the title or author includes the term. */

const library = [
  { title: "1984", author: "Orwell", available: true },
  { title: "The Hobbit", author: "Tolkien", available: false },
  { title: "Dune", author: "Herbert", available: true },
];


function borrowBook(title){
  const book = library.find(book => book.title === title);
  if (book && !book.available){
    book.available = false;
    console.log(`You borrowed ${book.title}`);
  }else{
    console.log(`${book.title} canot be borrowed sorry!`)
  }
}

function returnBook(title){
  const book = library.find(book => book.title === title);
  if(book.title && book.available){
    book.available = true;
    console.log(`${book.title} has been returned`)
  }else{
    console.log(`${book.title} was not borrowed`)
  }
}

function getAvailableBooks(title){
 return library.filter(book => book.available)
}






/* Challenge 2: Todo List with Filters
Description:

Build a basic todo system using JavaScript arrays and functions.


let todos = [
  { id: 1, text: "Learn JavaScript", done: false },
  { id: 2, text: "Build a project", done: false },
];
Tasks:

Write addTodo(text) to add a new item.

Write markDone(id) to mark a task as done.

Write deleteTodo(id) to remove a task.

Add a filter system:

getTodos("all" | "done" | "not_done")*/



/* 📦 Challenge 3: Shopping Cart System
Description:

You’re making a shopping cart for an online store.


const cart = [];
Tasks:

addItem(name, price, quantity) — adds a product.

removeItem(name) — removes an item by name.

getTotal() — returns total cost.

applyDiscount(code) — apply a 10% discount if the code is "SAVE10".

Bonus:

Support multiple discounts or discount stacking.

Store item quantities and merge duplicates instead of adding new rows.*/


/* Challenge 4: Pagination System
Description:

You have a large list of users and want to paginate them.


const users = [100 user objects with id, name];
Tasks:

paginate(array, pageSize, pageNumber) — returns a chunk of users.

Add boundary checks (e.g., if page is too high, return empty).

Add search: searchUsers(users, query) that filters and then paginates. */

/*Challenge 5: Custom map() and filter() Functions
Description:

Recreate two native JavaScript array methods manually.


function customMap(arr, callback) {
  // Your implementation
}

function customFilter(arr, callback) {
  // Your implementation
}
Bonus: Handle edge cases and write tests to compare with built-in versions. */


/*Challenge 6: Password Validator
Description:

Write a function validatePassword(password) that checks:

At least 8 characters long

Includes 1 uppercase, 1 lowercase, 1 number, and 1 special character

Return "Valid" or a list of what’s missing. */


/* 🧠 Challenge 7: Mini Quiz Engine
Build a mini quiz engine that lets you:

Load questions:

const questions = [
  { question: "2+2?", options: ["3", "4", "5"], answer: "4" },
  ...
];
Ask questions one by one.

Accept answers.

At the end, show total score.

Optional: Use the console to simulate interaction.*/


/* 🔥 Challenge 8: Weather App (with mock data)
Simulate a basic weather app using fake data.


const weatherData = {
  "London": { temp: 20, condition: "Cloudy" },
  "Tokyo": { temp: 28, condition: "Sunny" },
};
Tasks:

getWeather(city) → returns the city's weather.

addCity(city, temp, condition) → adds a city.

getCitiesByCondition("Sunny") → returns matching cities.*/


/* Bonus Challenge: Escape Room Puzzle Solver

// Find the password from clues
const puzzle = {
  step1: "Decode this: 72,101,108,108,111",
  step2: "Reverse this string: 1234!@#",
  step3: "Extract letters at prime indices from: 'cHaLlEnGe'",
};
Decode ASCII in step 1.

Reverse step 2.

Identify primes and extract letters in step 3.

Combine all results into a final password. */