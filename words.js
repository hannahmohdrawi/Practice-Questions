/*   1. Sum Numbers in an Array
Write a function sumArray(numbers) that uses a for...of loop to return the sum of all numbers in an array. */

function sumArray(numbers){
    let sum = 0;

    for (let number of numbers){
        sum += number;
    }
    return sum;
}

console.log("Sum of your numbers is", sumArray([7,8,9,10,24]));

/* 2. Count Vowels in a String
Write a function countVowels(str) that uses a for...of loop to count how many vowels (a, e, i, o, u) are in the string. */

function countVowels(str){
    let count = 0;

    for (let letter of str){
        if(letter=== "a"){
            count ++;
        } else if(letter==="e"){
            count++;
        } else if(letter==="i"){
            count++;
        }else if(letter==="o"){
            count++;
        }else if(letter==="u"){
            count++;
        }else{
            count;
        }

    }

    return count
}

console.log("There are " + countVowels("Potato") + " in the word you entered.");


/*3. Capitalize Words
Write a function capitalizeWords(words) that takes an array of lowercase words and returns a new array with each word capitalized (first letter uppercase).*/


function capitaliseWords(arr){
    const capitalised = [];

    for(let word of arr){
        capitalised.push(word[0].toUpperCase() + word.slice(1));
    }

    return capitalised;

}

console.log("Question 3:", capitaliseWords(["apple", "banana", "honeydew", "papaya"]));

/* 4. Exclamation Marks
Write a function addExclamations(words) that takes an array of words and returns a new array where each word has an exclamation mark (!) added to the end. */

function addExclamations(words){
    const emphasis = [];

    for(let str of words){
        emphasis.push(str + "!");
    }

    return emphasis;

}

console.log("Question 4:", addExclamations(["How exciting", "Wow", "Fantastic"]));

/*5. Filter Even Numbers
Write a function getEvenNumbers(numbers) that uses a for...of loop to return an array of only the even numbers. */

function getEvenNumbers(numbers){

    let even = [];

    for (let num of numbers){
        if(num % 2 == 0){
            even.push(num);
        }else{
            even;
        }
    }

    return even;


}

console.log("Question 5: Number of even numbers is", getEvenNumbers([45,64,72,50,23]));



/*6. Reverse All Strings
Write a function reverseStrings(strings) that returns a new array where each string from the input array is reversed.*/

function reverseStrings(strings){

    let reversed = [];

    for(let str of strings){
        reversed.push(str.split("").reverse().join(""));

    }

    return reversed;

}

console.log("Question 6:", reverseStrings(["chocolate", "hannah", "boat", "ship"]))



/*7. Letter Frequencies
Write a function letterFrequencies(word) that returns an object showing how many times each letter appears in the word.*/

function letterFrequencies(word){
    const count = {};

    for (let letter of word){
        count[letter] = (count[letter] || 0) + 1;
    }

    return count;
}

console.log("Question 7:", (letterFrequencies("banana")));

/*8. FizzBuzz
Write a function that loops from 1 to 20. For each number:

If divisible by 3, print "Fizz"

If divisible by 5, print "Buzz"

If divisible by both, print "FizzBuzz"

Otherwise, print the number */

function FizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

FizzBuzz();