// Game variables that only need to be declared once

const results = document.querySelector("#results");
let playerScore = 0;
const playerDisplay = document.querySelector("#playerScore");
let cpuScore = 0;
const cpuDisplay = document.querySelector("#cpuScore");
let round = 1;
const roundDisplay = document.querySelector("#roundCounter");
let canPlay = true;


function computerPlay(){    // generates a random choice for the computer

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

function updateDisplay(){   // updates the round counter

    playerDisplay.textContent = `Player: ${playerScore}`;
    cpuDisplay.textContent = `CPU: ${cpuScore}`;
    roundDisplay.textContent = `Round: ${round}`;

}


function createRestart(){   // creates the restart button element - only triggered if the button doesn't exist

    const body = document.querySelector("body");
    const restart = document.createElement("button");

    restart.setAttribute("id","restartButton");
    restart.textContent = "Restart?"

    restart.addEventListener("click", function(){ restartGame(); })
    body.appendChild(restart);

}


function restartGame(){  // resets the scores and rounds so the game can be replayed

    canPlay = true;
    round = 1;
    playerScore = 0;
    cpuScore = 0;

    const findRestart = document.getElementById("restartButton");
    const body = document.querySelector("body");
    body.removeChild(findRestart);

    updateDisplay();
    results.textContent = "Click an image to start!";

}



function playRound(playerSelection, cpuSelection){  // handles who wins a round and checks if the game is over

    if(canPlay){

        const player = playerSelection.toUpperCase();
        const cpu = cpuSelection.toUpperCase();
        let win = false;
        let tie = false;

        // checks for win / tie
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

        // Updates results
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

        // checks if game is over
        if(playerScore >= 5){
            results.textContent = "Congratulations! You won the series!";
            canPlay = false;
        }
        if(cpuScore >= 5){
            results.textContent = "The CPU won! Better luck next time!";
            canPlay = false;
        }

        // adds to the round counter if the game isn't over yet
        if(canPlay){
            round++;
        }

        updateDisplay();

    }

    let restartExists = document.getElementById("restartButton");
    if(!canPlay && !restartExists){
        createRestart();
    }

}


// behavior for the rock, paper, and scissors buttons

const buttons = document.querySelectorAll(".button");
for(const button of buttons){
    button.addEventListener("click", function(e){ playRound(e.target.id,computerPlay()); })
}
