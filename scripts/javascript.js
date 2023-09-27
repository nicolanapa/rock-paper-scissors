// Pseudocode / Algoritmo
// Inizializzare funzione getComputerChoice e dare valore random "Rock", "Paper", "Scissors"
// Usare math.random per definire valore variabile
// Inizializzare variabile playerSelection
// Inizializzare variabile computerSelection
// Usare prompt per prendere la scelta del giocatore
// Creare funzione che emula una partita di sasso carta forbice con i due parametri inizializzati
// Ritornare (Return) una stringa che dichiara il vincitore (nella funzione)
// Creare funzione game() per loopare 5 round
// Mostrare il vincitore a fine gioco
// 
let playerSelection;
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

function testPlay() {
    getComputerChoice();
    let risultati;
    playerSelection = prompt("Choose between: Rock, Paper, Scissors", "Rock");
    playerSelection = playerSelection.toLowerCase();
    if ( playerSelection == "rock" ) {
        if ( computerSelection == "rock" ) {
            risultati = "Oh! Draw between rock and rock!";
        }
        else if ( computerSelection == "paper" ) {
            risultati = "Oh! Lost to the power of the Paper.";
        }
        else if ( computerSelection == "scissors" ) {
            risultati = "Oh! Won against the poor Scissors!";
        }
    }
    else if ( playerSelection == "paper" ) {
        if ( computerSelection == "paper" ) {
            risultati = "Oh! Draw between Paper and Paper!";
        }
        else if ( computerSelection == "rock" ) {
            risultati = "Oh! Won against the poor Rock!";
        }
        else if ( computerSelection == "scissors" ) {
            risultati = "Oh! Lost to the power of the Scissors.";
        }
    }
    else if ( playerSelection == "scissors" ) {
        if ( computerSelection == "scissors" ) {
            risultati = "Oh! Draw between Scissors and Scissors!";
        }
        else if ( computerSelection == "rock" ) {
            risultati = "Oh! Lost to the power of the Rock.";
        }
        else if ( computerSelection == "paper" ) {
            risultati = "Oh! Won against the poor Paper!";
        }
    }
    else {
        risultati = "Sorry not a option";
    }
    return console.log(risultati);
}

// console.log(testPlay());

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(testPlay());
    }
}

console.log(game());