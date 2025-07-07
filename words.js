/*   1. Sum Numbers in an Array
Write a function sumArray(numbers) that uses a for...of loop to return the sum of all numbers in an array. */

function sumArray(numbers){
    let sum = 0;

    for (let number of numbers){
        sum += number;
    }
    return sum;
}

console.log("Sum of you numbers is", sumArray([7,8,9,10,24]));

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