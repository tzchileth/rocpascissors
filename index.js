// array of rock, paper, and scissor
let arr = ['Rock', 'Paper', 'Scissors'];

// getComputerChoice function
function getComputerChoice() {
    return arr[Math.floor(Math.random() * arr.length)];
}