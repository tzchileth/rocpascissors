// array of rock, paper, and scissor
let arr = ['rock', 'paper', 'scissors'];

// getComputerChoice function
function getComputerChoice() {
    return arr[Math.floor(Math.random() * arr.length)];
}

// getUserChoice function
function getPlayerChoice() {
    playerSelection = prompt("Make a choice: ", "Rock");
    return playerSelection;
}

// playRound: function to play one round of the game

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // R vs S = R
    if (playerSelection === arr[0] && computerSelection === arr[2]) {
        return `You Win! ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))} beats ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))}`;
    }
    if (playerSelection === arr[2] && computerSelection === arr[0]) {
        return `You Lose! ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))} beats ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))}`;
    }
    // R vs P = P
    if (playerSelection === arr[0] && computerSelection === arr[1]) {
        return `You Lose! ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))} beats ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))}`;
    }
    if (playerSelection === arr[1] && computerSelection === arr[0]) {
        return `You Win! ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))} beats ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))}`;
    }
    // P vs S = S
    if (playerSelection === arr[1] && computerSelection === arr[2]) {
        return `You Lose! ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))} beats ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))}`;
    }
    if (playerSelection === arr[2] && computerSelection === arr[1]) {
        return `You Win! ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))} beats ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))}`;
    }
    // same selection = No Winner! Tie
    else {
        while (playerSelection === computerSelection) {
            console.log(`No Victor! No Vanquished!\nPlayer = ${playerSelection} and Computer = ${computerSelection}`);

            playerSelection = prompt("Make a choice: ", "Rock");
            computerSelection = getComputerChoice();
            return playRound(playerSelection, computerSelection);
        }
    }
}