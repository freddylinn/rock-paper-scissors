function computerPlay(){

    const randIndex = Math.floor(Math.random() * 3);

    if(randIndex === 0){
        return "Rock";
    }
    else if(randIndex === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}


const results = document.querySelector("#results");
let playerScore = 0;
let cpuScore = 0;
let canPlay = true;
let round = 1;

function playRound(playerSelection, cpuSelection){

    const player = playerSelection.toUpperCase();
    const cpu = cpuSelection.toUpperCase();
    const roundCounter = document.querySelector("#roundCounter");
    roundCounter.textContent = `Round: ${round}`;
    let win = false;
    let tie = false;

    if(player === cpu){
        tie = true;
    }
    else if(player === "ROCK"){
        if(cpu === "SCISSORS"){
            win = true;
        }
    }
    else if(player === "PAPER"){
        if(cpu === "ROCK"){
            win = true;
        }
    }
    else if(player === "SCISSORS"){
        if(cpu === "PAPER"){
            win = true;
        }
    }


    if(win === true){
        results.textContent = `You Win! ${player} beats ${cpu}!`;
        playerScore++;
    }
    else if(tie === true){
        results.textContent = "It's a tie!";
    }
    else{
        results.textContent = `You Lose! ${cpu} beats ${player}`;
        cpuScore++;
    }


    if(playerScore >= 5){
        results.textContent = "Congratulations! You won the series!";
        canPlay = false;
    }
    if(cpuScore >= 5){
        results.textContent = "The CPU won! Better luck next time!";
        canPlay = false;
    }

    round++;

}
