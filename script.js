const emails = [
    'luca@live.it',
    'andrea@live.it',
    'michele@live.it',
    'giovanni@live.it'
];

let mailUtente = prompt('inserisci mail');
let emailFound = false;

for (let i = 0; i < emails.length; i++) {
    if (mailUtente === emails[i]) {
        emailFound = true;
    }
}

if (emailFound === true) {
    console.log ('email trovata');
} else {
    console.log ('email non trovata')
}


// esercizio 2 

let risultati = [];
let vittorieGiocatore = '';
let vittorieComputer = '';

for( let i = 0; i < 5 ; i++) {

const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

console.log(`giocatore: ${giocatore}, computer: ${computer}`);

if(giocatore > computer) {
    console.log('giocatore vince');
    risultati.push('giocatore');
} else if (giocatore < computer) {
    console.log('compluter vince')
    risultati.push('computer');
} else {
    console.log('patta')
    risultati.push('patta')
}

}

console.log(risultati);

for(let i = 0; i < risultati.length; i++) {

    if(risultati[i] === 'giocatore') {
        vittorieGiocatore++;
    } else if (risultati[i] === 'computer') {
        vittorieComputer++;
    }
}

console.log('vittorieGiocatore -->' , vittorieGiocatore);
console.log('vittorieComputer -->', vittorieComputer);
