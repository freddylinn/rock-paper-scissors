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

function createRestart(){
    const body = document.querySelector("body");
    const restart = document.createElement("button");
    restart.setAttribute("id","restartButton");
    restart.textContent = "Restart?"
    body.appendChild(restart);
}


const results = document.querySelector("#results");
let playerScore = 0;
const playerDisplay = document.querySelector("#playerScore");
let cpuScore = 0;
const cpuDisplay = document.querySelector("#cpuScore");
let canPlay = true;
let round = 1;


function playRound(playerSelection, cpuSelection){

    if(canPlay){
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

        playerDisplay.textContent = `Player: ${playerScore}`;
        cpuDisplay.textContent = `CPU: ${cpuScore}`;

        if(playerScore >= 5){
            results.textContent = "Congratulations! You won the series!";
            canPlay = false;
        }
        if(cpuScore >= 5){
            results.textContent = "The CPU won! Better luck next time!";
            canPlay = false;
        }

        if(canPlay){
            round++;
        }
    }

    let restartExists = document.getElementById("restartButton");
    if(!canPlay && !restartExists){
        createRestart();
    }

}

const buttons = document.querySelectorAll(".button");
for(const button of buttons){
    button.addEventListener("click", function(e){ playRound(e.target.id,computerPlay()); })
}


