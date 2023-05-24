



const emails = [
    'luca@live.it',
    'andrea@live.it',
    'michele@live.it',
    'giovanni@live.it'
];

let mailUtente = "giovanni@live.it";
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