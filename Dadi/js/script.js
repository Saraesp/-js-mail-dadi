// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1 - Generare un numero random da 1 a 6
//2 - Generare un numero random per il giocatore
//3 - Generare un numero random per il computer
//4 - Chi ha il punteggio più alto ha vinto

let giocatore_num = Math.floor(Math.random() * 6) + 1;
let computer_num = Math.floor(Math.random() * 6) + 1;


if(giocatore_num > computer_num){
    console.log(`Numero giocatore: ${giocatore_num}, numero computer: ${computer_num}. Il giocatore ha vinto!`)
}
else if(giocatore_num < computer_num){
    console.log(`Numero giocatore: ${giocatore_num}, numero computer: ${computer_num}. Il computer ha vinto!`)
}
else{
    console.log(`Numero giocatore: ${giocatore_num}, numero computer: ${computer_num}. Patta`)
}

