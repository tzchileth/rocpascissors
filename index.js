// array of rock, paper, and scissor
let arr = ['rock', 'paper', 'scissors'];

let userWin = 0;
let computerWin = 0;
let gameCount = 1;

// event listeners
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("#result");
const reset = document.querySelector("#reset");

rock.addEventListener('click', () => {
    playerSelection = rock.id;
    game();
});

paper.addEventListener('click', () => {
    playerSelection = paper.id;
    game();
});

scissors.addEventListener('click', () => {
    playerSelection = scissors.id;
    game();
});

reset.addEventListener('click', () => {
    let pNodeList = document.querySelectorAll("p, h1");
    pNodeList.forEach((pElem) => pElem.remove(pElem))
    userWin = 0;
    computerWin = 0;
    gameCount = 1;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});
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
        userWin++;
        gameCount++;
        let p = document.createElement("p");
        p.textContent = `You Win! ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))} beats ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))}`;
        div.appendChild(p);
    }
    if (playerSelection === arr[2] && computerSelection === arr[0]) {
        computerWin++;
        gameCount++;

        let p = document.createElement("p");
        p.textContent = `You Lose! ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))} beats ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))}`;
        div.appendChild(p);

    }
    // R vs P = P
    if (playerSelection === arr[0] && computerSelection === arr[1]) {
        computerWin++;
        gameCount++;

        let p = document.createElement("p");
        p.textContent = `You Lose! ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))} beats ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))}`;
        div.appendChild(p);
    }
    if (playerSelection === arr[1] && computerSelection === arr[0]) {
        userWin++;
        gameCount++;

        let p = document.createElement("p");
        p.textContent = `You Win! ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))} beats ${arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1))}`;
        div.appendChild(p);
    }
    // P vs S = S
    if (playerSelection === arr[1] && computerSelection === arr[2]) {
        computerWin++;
        gameCount++;

        let p = document.createElement("p");
        p.textContent = `You Lose! ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))} beats ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))}`;
        div.appendChild(p);

    }
    if (playerSelection === arr[2] && computerSelection === arr[1]) {
        userWin++;
        gameCount++;
        let p = document.createElement("p");
        p.textContent = `You Win! ${arr[2].slice(0, 1).toUpperCase().concat(arr[2].slice(1))} beats ${arr[1].slice(0, 1).toUpperCase().concat(arr[1].slice(1))}`;
        div.appendChild(p);
    }
    // same selection = No Winner! Tie
    else if (playerSelection === computerSelection) {
        userWin++;
        computerWin++;
        gameCount++;

        let p = document.createElement("p");
        p.innerHTML = `No Victor! No Vanquished!<br>Player = ${playerSelection} and Computer = ${computerSelection}`;
        div.appendChild(p);
    }
}

// game function: play 5 rounds of game
function game() {
    computerSelection = getComputerChoice();
    let h1 = document.createElement("h1");
    h1.textContent = `Game Count: ${gameCount}`;
    div.appendChild(h1);
    playRound(playerSelection, computerSelection);

    displayScore();
}

function displayScore() {
    if (userWin === 5 || computerWin === 5) {
        if (userWin > computerWin) {
            let h1 = document.createElement("h1");
            h1.style.color = 'blue';
            h1.textContent = `***Game Score***`;
            div.appendChild(h1);

            let p1 = document.createElement("p");
            p1.textContent = `You Win! Player = ${userWin} vs Computer = ${computerWin}`;
            div.appendChild(p1);

        } else if (userWin < computerWin) {

            let h1 = document.createElement("h1");
            h1.textContent = `***Game Score***`;
            h1.style.color = 'blue';
            div.appendChild(h1);

            let p1 = document.createElement("p");
            p1.textContent = `You Lose! Player = ${userWin} vs Computer = ${computerWin}`;
            div.appendChild(p1);
        } else {

            let h1 = document.createElement("h1");
            h1.textContent = `***Game Score***`;
            h1.style.color = 'blue';
            div.appendChild(h1);

            let p1 = document.createElement("p");
            p1.textContent = `Tie! Player = ${userWin} vs Computer = ${computerWin}`;
            div.appendChild(p1);
        }

        // disable the game buttons
        // this forces the player to reset the game
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

    }
}