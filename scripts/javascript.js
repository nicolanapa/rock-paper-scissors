let playerSelection;
let scorePlayer = document.querySelector("#punteggioPlayer");
let scorePlayer1 = 0;
let scoreComputer = document.querySelector("#punteggioComputer");
let scoreComputer1 = 0;
let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playerSelection = "rock";
    testPlay(playerSelection);

});
let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playerSelection = "paper";
    testPlay(playerSelection);
});
let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    testPlay(playerSelection);
});


let computerSelection;
function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    if ( randomValue == 0 ) {
        computerSelection = "rock";
        return computerSelection;
    }
    else if ( randomValue == 1 ) {
        computerSelection = "paper";
        return computerSelection;
    }
    else if ( randomValue == 2 ) {
        computerSelection = "scissors";
        return computerSelection;
    }
}

function testPlay(playerSelection) {
    getComputerChoice();
    let risultati;
    let win;
    //playerSelection = prompt("Choose between: Rock, Paper, Scissors", "Rock"); -> OLD CODE
    //playerSelection = playerSelection.toLowerCase(); -> OLD CODE
    if ( playerSelection == "rock" ) {
        if ( computerSelection == "rock" ) {
            risultati = "Oh! Draw between rock and rock!";
            win = 0;
        }
        else if ( computerSelection == "paper" ) {
            risultati = "Oh! Lost to the power of the Paper.";
            win = false;
        }
        else if ( computerSelection == "scissors" ) {
            risultati = "Oh! Won against the poor Scissors!";
            win = true;
        }
    }
    else if ( playerSelection == "paper" ) {
        if ( computerSelection == "paper" ) {
            risultati = "Oh! Draw between Paper and Paper!";
            win = 0;
        }
        else if ( computerSelection == "rock" ) {
            risultati = "Oh! Won against the poor Rock!";
            win = true;
        }
        else if ( computerSelection == "scissors" ) {
            risultati = "Oh! Lost to the power of the Scissors.";
            win = false;
        }
    }
    else if ( playerSelection == "scissors" ) {
        if ( computerSelection == "scissors" ) {
            risultati = "Oh! Draw between Scissors and Scissors!";
            win = 0;
        }
        else if ( computerSelection == "rock" ) {
            risultati = "Oh! Lost to the power of the Rock.";
            win = false;
        }
        else if ( computerSelection == "paper" ) {
            risultati = "Oh! Won against the poor Paper!";
            win = true;
        }
    }
    else {
        risultati = "Sorry not a option";
    }
    let div_esito = document.querySelector("#esito");
    div_esito.textContent = risultati;
    if ( win === true ) {
        scorePlayer1 = Number(scorePlayer1) + 1;
    }
    else if ( win === false ) {
        scoreComputer1 = Number(scoreComputer1) + 1;
    }
    if ( scorePlayer1 == 5) {
        scorePlayer.textContent = "YOU WON! COMPUTER LOSES 😍";
        scorePlayer1 = 0;
        scoreComputer1 = 0;
        return div_esito, scorePlayer;
    }
    else if ( scoreComputer1 == 5 ) {
        scoreComputer.textContent = "YOU LOSE! COMPUTER WINS 😓";
        scorePlayer1 = 0;
        scoreComputer1 = 0;
        return div_esito, scoreComputer
    }
    scoreComputer.textContent = scoreComputer1;
    scorePlayer.textContent = scorePlayer1;
    return div_esito;
}