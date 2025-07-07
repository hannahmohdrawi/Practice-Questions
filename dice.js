/*
1. Roll a Die
Write a function rollDie() that returns a random number between 1 and 6, simulating the roll of a six-sided die.
You should multiply by 6, not 7, and add 1 to shift the range from 0–5 to 1–6:
*/

function rollDie(){
    return Math.floor(Math.random() * 6) + 1 ;
}

console.log("You rolled a:", rollDie());

/*
2. Roll Two Dice and Add
Write a function rollTwoDice() that returns the sum of two dice rolls.
*/

function rollTwoDice(){
    const dice1 = Math.floor(Math.random() * 6) + 1 
    const dice2 = Math.floor(Math.random() * 6) + 1 

    return dice1 + dice2;
}

console.log("You rolled a:", rollTwoDice());

/*
3. Is It a Double?
Write a function isDouble() that rolls two dice and returns true if both dice show the same number, otherwise false.
*/

function isDouble(){
    const dice1 = Math.floor(Math.random() * 6) + 1 
    const dice2 = Math.floor(Math.random() * 6) + 1 

    if(dice1 === dice2){
        return true
    }else{
        return false
    }

    console.log(`You rolled: ${dice1} and ${dice2}`);
}

console.log("Both dice are the same:", isDouble());

/*
4. Roll n Dice
Write a function rollNDice(n) that returns an array of n dice rolls. Each roll should be a number between 1 and 6.
*/

function rollNDice(n){
    const rolls = [];

    for (let i=0; i<1; i++){

        diceRoll = Math.floor(Math.random() * 6) + 1;
        rolls.push(diceRoll);
    }
}





/*
5. Count Occurrences
Write a function countDiceRolls(rolls) that takes an array of numbers (dice rolls) and returns an object showing how many times each number appeared.

// Example input: [2, 4, 6, 2, 1, 4]
// Output: {1:1, 2:2, 4:2, 6:1}

*/

function countDiceRolls(rolls){

    const counts = {};

    for (let roll in rolls){
        counts[roll] = (counts[roll] || 0) + 1;
    }
    return counts;
}


/*
6. Dice Game Scoring
Create a function scoreRolls(rolls) that takes an array of 5 dice rolls and scores them as follows:

5 of a kind: 50 points

4 of a kind: 40 points

3 of a kind: 30 points

A pair: 10 points

Otherwise: 0

*/


function scoreRolls(rolls){
    const counts = {}

    for (let roll of rolls){
        counts[roll] = (counts[roll] || 0) + 1;
    }

    const maxCount = Math.max(...Object.values(counts));

    if (maxCount === 5){
        return 50;
    }else if (maxCount === 4){
        return 40
    }else if (maxCount === 3){
        return 30
    }else if (maxCount === 2){
        return 10
    }else{
        return 0
    }

    
}

console.log("You have " + scoreRolls([3,4,5,6,3]) + " points");






/*

*/


/*

*/


/*

*/
