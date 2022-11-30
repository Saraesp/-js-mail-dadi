// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes!

//1 - Chiedi all'utente la sua email
//2 - Controllo la lista
//2.1 - Se la sua emal è presente allora stampa L'utente può accedere
//2.2 - Altrimenti stampa L'utente non può accedere

const email = ["sara.esp@gmail.com", "fra.lol@gmail.com", "michele.giordani@gmail.com", "lola.torre@gmail.com"]

let text = parseInt(prompt("Inserisci la tua email"))

if(email[text] == undefined){
    console.log('Email non trovata, l\'utente non può accedere')
}
else{
    console.log('Email trovata, l\'utente può accedere')
}

