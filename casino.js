/*1. Simulate a Fair Dice Roll

Write a function that simulates a fair 6-sided dice roll.

Then simulate rolling it 10,000 times and check if all numbers are roughly equally likely.*/


function diceRoll(){
    return Math.floor(Math.random() * 6 + 1)
}

function simulateDiceRoll(n = 10000){
    const freq = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};

    for (let i = 0; i < n; i++){
        const result = diceRoll();
        freq[result]++;
    }

    for (let face = 1; face <= 6; face++){
        const count = freq[face];
        const percent = ((count / n ) * 100).toFixed(2);
        console.log(`${face}: ${count} (${percent}%)`);
    }
}

simulateDiceRoll();


/* 2. Simple Dice Game: Higher Wins

Player A and B each roll a die.

Return the winner or “Draw”.

Add a function that repeats this 1000 times and gives win rates.*/

function diceRollA(){
    return Math.floor(Math.random() * 6 + 1);

}

function diceRollB(){
    return Math.floor(Math.random() * 6 + 1);
}

function higherWins(){

    const rollA = diceRollA();
    const rollB = diceRollB();

    if (rollA > rollB) {
        return "A";
    } else if (rollB > rollA) {
        return "B";
    } else {
        return "Draw";
    }
}

function simulateRolls(n = 1000){
    const results = {A:0, B:0, Draw: 0};

    for(let i=0; i < n; i++){
        const outcome = higherWins();
        results[outcome]++;
    }
    console.log(results);
}

simulateRolls();



/* 3. Craps First-Round Winner

Implement the first roll rules of the Craps game:

Win on 7 or 11

Lose on 2, 3, or 12

Anything else: "Point" is set

Return win, lose, or point. */

function crapsFirstRoll(){
    const roll = diceRoll() + diceRoll();

    if (roll === 7 || roll === 11){
        return "Win";
    }else if( roll === 2 || roll === 3 || roll === 12){
        return "Lose";
    }else{
        return `Point ${roll}`;
    }
}

console.log(crapsFirstRoll()); 


/*4. Dice Betting Game Simulator

A player bets $10 on a specific number (1–6).

If the number comes up, they win 5× their bet.

Simulate 100 rounds and return profit/loss. */


function betGame(playerNumber, bet = 10){
    const outcome = diceRoll();

    if(outcome === playerNumber){
        return 5 * bet;
    }else {
        return -bet;
    }

}

function simulateBet(rounds = 100, playerNumber){

    let total = 0;

    for(let i=0; i < rounds; i++){
        total += betGame(playerNumber)
    }

    console.log(`Total after ${rounds} rounds: $${total}`);
}

simulateBet(100, 5);





/*5. Casino Credit Tracker

Build a class Player with name, balance, and betting history.

Let them bet, win/lose money, and log results.

Add a Casino class to track all players. */



/*6.Monty Hall Game Simulator (Casino Variant)

Simulate the Monty Hall problem:

3 doors, 1 prize, 2 empty.

After the player picks, the host opens a losing door.

Simulate staying vs switching for 1000 rounds. */


