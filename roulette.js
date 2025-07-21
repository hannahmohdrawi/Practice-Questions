const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

const wheel = Array.from({ length: 37}, (_, number) => {
    let colour;

    if (number === 0){
        colour = 'green';
    }else if (redNumbers.includes(number)){
        colour = 'red';
    }else{
        colour = 'black';
    }

    return { number: number, colour: colour}
});

//console.log(wheel)

function spinWheel(){
    const result = wheel[Math.floor(Math.random() * wheel.length)];
    return result;
}

let player = {
    balance: 1000,
}

function placeBet(type, value, amount){
    if (amount > player.balance){
        console.log("Insufficient balance");
        return;
    }


    const spinResult = spinWheel();
    console.log(`The wheel landed on ${spinResult.number} (${spinResult.colour})`);


    let win = false;
    let payout = 0;

    if (type === "number" && spinResult.number === value){
        win = true;
        payout = amount * 35;
    }else if (type === "colour" && spinResult.colour === value.toLowerCase() ){
        win = true;
        payout = amount * 1;
    }else if (type === "odd/even"){
        if (spinResult.number !== 0){
            const parity = spinResult.number % 2 === 0 ? "even" : "odd";
            if(parity === value.toLowerCase()){
                win = true;
                payout = amount * 1;
            }
        }
    }

    if(win){
        console.log(`You won! + $${payout}`);
        player.balance += payout;
    }else{
        console.log(`You lost $${amount}`);
        player.balance -= amount;
    }

    console.log(`New Balance: $${player.balance}`);
}

console.log("🎉 Welcome to Roulette! Your starting balance is $" + player.balance);

placeBet("color", "red", 100);
placeBet("number", 17, 25);
placeBet("odd/even", "odd", 50);