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
let score = document.querySelector("#punteggio");
let score1 = 0;
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
    //playerSelection = prompt("Choose between: Rock, Paper, Scissors", "Rock");
    //playerSelection = playerSelection.toLowerCase();
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
        score1 = Number(score1) + 1;
    }
    else if ( win === false ) {
        score1 = Number(score1) - 1;
    }
    if ( score1 == 5) {
        score.textContent = "YOU WON! COMPUTER LOSES";
        return div_esito, score;
    }
    else if ( score1 == -5 ) {
        score.textContent = "YOU LOSE! COMPUTER WINS";
        return div_esito, score
    }
    if ( score1 > 5 || score1 < -5 ) {
        score1 = 0;
    }
    score.textContent = score1; // To remove
    return div_esito;
}

// console.log(testPlay());

/*function game() {
    for (let i = 0; i < 5; i++) {
        console.log(testPlay());
    }
}

game(); */

