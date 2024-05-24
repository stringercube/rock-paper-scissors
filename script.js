// Rock Paper Scissors console game! //


let humanScore = 0;
let computerScore = 0;

document.querySelector('.selection').addEventListener('click', (e) => {
    const { target } = e;

    // Check if a button was clicked
    if (target.tagName === 'BUTTON') {
        const humanChoice = target.id.toUpperCase();
        playRound(humanChoice);
    }
});

function playRound(humanChoice) {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (humanChoice === computerChoice) {
        addComment(`Draw! You both picked ${humanChoice.toLowerCase()}.`);
    } else if (
        (humanChoice === 'ROCK' && computerChoice === 'PAPER') ||
        (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')
    ) {
        computerScore++;
        addComment(`You lose! ${computerChoice.toLowerCase()} beats ${humanChoice.toLowerCase()}.`);
    } else {
        humanScore++;
        addComment(`You won! ${humanChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}.`);
    }

    addScore(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

// modify to print in new div the score instead of console

function addComment(scoreSentence) {
    const gameResult = document.querySelector("#gameresult");
    gameResult.textContent = scoreSentence;
}

function addScore(scoreSentence) {
    const score = document.querySelector("#score");
    score.textContent = scoreSentence;
}