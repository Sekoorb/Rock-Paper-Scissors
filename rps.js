function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if ((playerSelection.toLowerCase() != "rock") && 
    (playerSelection.toLowerCase() != "scissors") &&
    (playerSelection.toLowerCase() != "paper")) {
        result = "Try again: " + playerSelection + " is an invalid input";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'paper' && playerSelection == 'rock') ||
            (computerSelection == 'scissors' && playerSelection == 'paper')) {
            result = "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        result = "Tie game. You both selected " + playerSelection;
    }
    return result;
  }

/*
const computerSelection = getComputerChoice()
const playerSelection = "rock"
console.log(playRound(playerSelection, computerSelection))
*/

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let result;
    
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)
        if (result.includes("You win")) {
            playerScore++;
        }
        else if (result.includes("You lose")){
            computerScore++;
        }
        console.log(result);
        console.log("Player = " + playerScore + ", Computer = " + computerScore);
    }
}

game();