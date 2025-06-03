//LAB ACTIVITY 3 JAVASCRIPT - CONSOLE AND DOM - ALLIE JURCZAK
// =========================================
// Lab Activity: Rock, Paper, Scissors Game
// Add your code here

let score = 0;
let isGameRunning = false;

//START GAME FUNCTION
function startGame() {
    isGameRunning = true;
    document.getElementById('result').textContent = "Game Started! Choose Rock, Paper or Scirssors.";
}
//STOP GAME FUNCTION
function stopGame() {
    isGameRunning = false;
    document.getElementById('result').textContent = "Game Stopped!";
}
//RESET GAME FUNCTION
function resetGame() {
    score = 0;
    isGameRunning = false;
    document.getElementById('score').textContent = "Score 0";
    document.getElementById('result').textContent = "Game reset. Click 'Start Game to play again."
}

//STARTS THE GAME
function play(userChoice) {
    if (!isGameRunning) {
        document.getElementById('result').textContent = "Please start the game first!";
        return;
    }
    //COMPUTER PICKS ROCK, PAPPER OR SCISSORS
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';


    //COMPUTER PICKS A CHOICE 
    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        //UPDATES THE PAGE AND NEW SCORE
        result = `You win! ${userChoice} beats ${computerChoice}`;
        score++;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}`;
        score--;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = "Score: " + score;
}

//Last update 5:15PM 6/3/2025







// =========================================
