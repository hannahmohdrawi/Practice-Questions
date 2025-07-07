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
