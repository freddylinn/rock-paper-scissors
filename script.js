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

function playRound(playerSelection, cpuSelection){

    const player = playerSelection.toUpperCase();
    const cpu = cpuSelection.toUpperCase();
    let win = false;
    let tie = false;

    if(player === cpu){
        return "It's a tie!";
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


    let result = ``;

    if(win === true){
        result = `You Win! ${player} beats ${cpu}!`;
    }
    else if(tie === true){
        result = "It's a tie!";
    }
    else{
        result = `You Lose! ${cpu} beats ${player}`;
    }

    return result;

}

function game(){

    let rounds = 1;
    let playerScore = 0;
    let cpuScore = 0;
    let playerInput;
    let computerInput;

    while(playerScore < 5 && cpuScore < 5){

        playerInput = prompt("Enter your choice");
        computerInput = computerPlay();

        if(playRound(playerInput,computerInput).substring(0,7) == "You Win"){
            playerScore++;
        }
        else if(playRound(playerInput,computerInput).substring(0,8) == "You Lose"){
            cpuScore++;
        }

        rounds++;

    }

    if(playerScore === 3){
        console.log("Congratulations! You won the series!");
    }
    else{
        console.log("The CPU won! Better luck next time.");
    }

}