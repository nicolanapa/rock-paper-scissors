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
getComputerChoice();

function testPlay(computerSelection) {
    let risultati;
    playerSelection = prompt("Choose between: Rock, Paper, Scissors", "");
    playerSelection = playerSelection.toLowerCase();
    if ( playerSelection == "rock" ) {
        if ( computerSelection == "rock" ) {
            risultati = "Oh! Draw between rock and rock!";
            calcoli1 = 0;
        }
        else if ( computerSelection == "paper" ) {
            risultati = "Oh! Lost to the power of the Paper.";
            calcoli1 = -1;
        }
        else if ( computerSelection == "scissors" ) {
            risultati = "Oh! Won against the poor Scissors!";
            calcoli1 = +1;
        }
    }
    else if ( playerSelection == "paper" ) {
        if ( computerSelection == "paper" ) {
            risultati = "Oh! Draw between Paper and Paper!";
            calcoli1 = 0;
        }
        else if ( computerSelection == "rock" ) {
            risultati = "Oh! Won against the poor Rock!";
            calcoli1 = +1;
        }
        else if ( computerSelection == "scissors" ) {
            risultati = "Oh! Lost to the power of the Scissors.";
            calcoli1 = -1;
        }
    }
    else if ( playerSelection == "scissors" ) {
        if ( computerSelection == "scissors" ) {
            risultati = "Oh! Draw between Scissors and Scissors!";
            calcoli1 = 0;
        }
        else if ( computerSelection == "rock" ) {
            risultati = "Oh! Lost to the power of the Rock.";
            calcoli1 = -1;
        }
        else if ( computerSelection == "paper" ) {
            risultati = "Oh! Won against the poor Paper!";
            calcoli1 = +1;
        }
    }
    else {
        risultati = "Sorry not a option";
    }
    return risultati, calcoli1;
}
// console.log(testPlay(computerSelection));

function calcoliFunzione(calcoli1) {
    calcoli;
    calcoli1;
    if ( calcoli1 == 0 ) {
        calcoli = calcoli + 0;
    }
    else if ( calcoli1 == +1 ) {
        calcoli = calcoli + 1;
    }
    else if ( calcoli1 == -1 ) {
        calcoli = calcoli - 1;
    }
}

function game() {
    let calcoli1;
    getComputerChoice();
    console.log(getComputerChoice());
    testPlay(computerSelection);
    //calcoliFunzione()
    getComputerChoice();
    console.log(getComputerChoice());
    testPlay(computerSelection);
    //calcoliFunzione()
    getComputerChoice();
    console.log(getComputerChoice());
    testPlay(computerSelection);
    //calcoliFunzione()
    getComputerChoice();
    console.log(getComputerChoice());
    testPlay(computerSelection);
    //calcoliFunzione()
    getComputerChoice();
    console.log(getComputerChoice());
    testPlay(computerSelection);
    //calcoliFunzione()
    getComputerChoice();
    console.log(getComputerChoice());
    /*if ( calcoli1 >= 5 ) {
        console.log("And the winner is....  YOU! 5 - 0");
    }
    else if ( calcoli1 <= -5 ) {
        console.log("And the winner is...  THE MACHINE! 0 - 5");
    }
    else if ( calcoli1 == 0 ) {
        console.log("And the winner is...  DRAW! 0 - 0");
    }
    else if ( calcoli1 > 0 ) {
        console.log("And the almost winner is...  YOU! > 0");
    }
    else if ( calcoli1 < 0 ) {
        console.log("And the almost winner is...  THE MACHINE! < 0");
    }
    return calcoli1*/
}
console.log(game());